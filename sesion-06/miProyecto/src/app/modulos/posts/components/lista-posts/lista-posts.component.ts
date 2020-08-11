import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/providers/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'open-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.scss']
})
export class ListaPostsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public posts: any[] = [];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Ejecuta cuando el componente se crea
    this.getMasters();
  }

  ngOnDestroy(): void {
    // Ejecuta cuando el componente se destruye
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getMasters() {
    this.postsService.getAll$()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  public shoComentarios(post) {
    this.router.navigate([post.id], { relativeTo: this.activatedRoute });
  }

}
