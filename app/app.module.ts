import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';

import { UserService } from './user.service';
import { FeedService } from './feed.service';

import {FriendsComponent } from './friends/friends.component';
import {MessagesComponent } from './messages/messages.component';
import { routing, appRoutingProviders } from './app.routing';
import { FriendComponent } from './friend/friend.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { ClockComponent } from './clock/clock.component';

import { ClockService } from './clock.service';
import { CommandNavigatorComponent } from './command-navigator/command-navigator.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { GledgerComponent } from './gledger/gledger.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MenuComponent,
    FeedComponent,
    FriendsComponent,
    MessagesComponent,
    FriendComponent,
    HeaderMenuComponent,
    IconMenuComponent,
    ClockComponent,
    CommandNavigatorComponent,
    DocumentsComponent,
    ReportsComponent,
    SalesComponent,
    GledgerComponent,
    CustomerComponent,
    SupplierComponent,
    PurchaseComponent,
    StockComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [UserService, FeedService, appRoutingProviders, ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
