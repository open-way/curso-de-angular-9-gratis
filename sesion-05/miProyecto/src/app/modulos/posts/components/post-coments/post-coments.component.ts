import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { CommentsService } from 'src/app/providers/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'open-post-coments',
  templateUrl: './post-coments.component.html',
  styleUrls: ['./post-coments.component.scss']
})
export class PostComentsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public id: string;
  public comments: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map(params => params.get('id')))
      .subscribe(id => {
        this.id = id;
        this.getComentarios();
      });
  }

  ngOnDestroy(): void {
    // Ejecuta cuando el componente se destruye
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getComentarios() {
    const query = {
      postId: this.id,
    }
    this.commentsService.getByQuery$(query)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(posts => {
        this.comments = posts;
      });
  }

}
