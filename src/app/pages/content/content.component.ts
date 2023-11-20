import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('1')
    )
    console.log(this.id);
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    console.log(result);
    this.cardTitle = result.title;
    this.photoCover = result.photo;
    this.cardDescription = result.description;
  }
}
