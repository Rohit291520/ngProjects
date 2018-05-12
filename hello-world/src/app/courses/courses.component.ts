import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
      <h2> {{ title }}</h2>
      <button class="btn btn-primary">Hello</button>
      <ul>
        <li *ngFor="let course of courses">{{course}}</li>
      </ul>
  `
})

export class CoursesComponent {
    title = 'List of Courses';
    courses;

    constructor(objCoursesService: CoursesService){
      this.courses = objCoursesService.getCourses();
    }

}
