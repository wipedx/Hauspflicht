import { Component, OnInit, ChangeDetectorRef, OnDestroy, Type } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
enum EntryType { ENTRY, SEPARATOR, MENU }
class NavList {
  type?: EntryType = EntryType.ENTRY;
  name?: string;
  children?: NavList[];
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  nav: NavList[] = [
    { name: 'Stock overview' },
    { name: 'Shopping List' },
    { type: EntryType.SEPARATOR },
    { name: 'Recipes' },
    { name: 'Meal plan' },
    { type: EntryType.SEPARATOR },
    { name: 'Chores overview' },
    { name: 'Tasks' },
    { name: 'Batteries overview' },
    { name: 'Equipment' },
    { type: EntryType.SEPARATOR },
    { name: 'Calendar' },
    { name: 'Purchase' },
    { name: 'Consume' },
    { name: 'Transfer' },
    { name: 'Inventory' },
    { name: 'Chore tracking' },
    { name: 'Battery tracking' },
    { name: 'Manage master data', type: EntryType.MENU, children: [
      { name: 'Products' },
      { name: 'Locations' },
      { name: 'Quantity units' },
      { name: 'Product groups' },
      { name: 'Chores' },
      { name: 'Batteries' },
      { name: 'Task categories' },
    ]}
  ]

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
