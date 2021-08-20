import { AfterViewInit, Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  config = {
    searchClient: algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5'),
    indexName: 'demo_ecommerce',
    routing: true
  };

  ngOnInit(): void {
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('click', this.onClick);
  }

  ngAfterViewInit(): void {
    
  }

  onKeyUp = (event: any) => {
    console.log(event)
  };

  onClick = (event: any) => {
    console.log(event)
  };

}
