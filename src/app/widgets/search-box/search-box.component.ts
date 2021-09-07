import { Component, Inject, forwardRef, Optional, OnInit } from '@angular/core';
import { TypedBaseWidget, NgAisInstantSearch, NgAisIndex } from 'angular-instantsearch';
import connectSearchBox, {
  SearchBoxWidgetDescription,
  SearchBoxConnectorParams
} from 'instantsearch.js/es/connectors/search-box/connectSearchBox';

@Component({
  selector: 'app-search-box',
  template: `
  <input
    type="text"
    #input
    (keyup)="this.state.refine(input.value)"
    [value]="this.state.query"
  />
  `
})
export class SearchBoxComponent extends TypedBaseWidget<SearchBoxWidgetDescription, SearchBoxConnectorParams> implements OnInit {

  public state: SearchBoxWidgetDescription['renderState']; // Rendering options
  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('SearchBox');
  }

  ngOnInit() {
    this.createWidget(connectSearchBox, {
      // instance options
    });
    super.ngOnInit();
  }
}
