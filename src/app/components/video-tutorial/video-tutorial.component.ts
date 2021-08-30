import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
@Component({
  selector: 'app-video-tutorial',
  templateUrl: './video-tutorial.component.html',
  styleUrls: ['./video-tutorial.component.scss']
})
export class VideoTutorialComponent implements OnInit {

  lightbox: any;

  constructor() { }
  
  ngOnInit(): void {

    this.lightbox = GLightbox({
      'href': '../../../assets/video/pexels-lisa-7934113.mp4',
      'type': 'video',
      'source': 'local', //vimeo, youtube or local
      'width': 900,
      'autoplayVideos': true,
      'touchNavigation': false,
    });
  }

}
