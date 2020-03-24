import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationSectionService} from '../authenticationSection/authenticationSection.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  authenticated = false;

  constructor(private dataStorageService: DataStorageService, private authenticationsService: AuthenticationSectionService) {
  }

  ngOnInit() {
    this.sub = this.authenticationsService.user.subscribe(user => {
      this.authenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy() {
   this.sub.unsubscribe();
  }

  logoutFunc() {
    this.authenticationsService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeProducts();
  }

  onFetchData() {
    this.dataStorageService.fetchProducts().subscribe();
  }

}
