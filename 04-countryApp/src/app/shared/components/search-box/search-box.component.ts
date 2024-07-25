import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  @Input() public placeholder: string = '';
  @Input() public initialValue: string = '';
  @Output() public onValue = new EventEmitter();
  @Output() public onDebounce = new EventEmitter();

  ngOnInit(): void {
    this.debounceSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
        console.log({ value });
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy(): void {
    console.log("Destroyed!");
    this.debounceSubscription?.unsubscribe();
  }

  emitValue(term: string): void {
    // console.log({term});
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}