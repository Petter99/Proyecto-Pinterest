import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostPage } from './new-post';

describe('NewPost', () => {
  let component: NewPostPage;
  let fixture: ComponentFixture<NewPostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
