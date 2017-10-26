import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GledgerComponent } from './gledger/gledger.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';

import { DocumentsComponent } from './documents/documents.component';
import { ReportsComponent } from './reports/reports.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/gledger', pathMatch: 'full' },
    { path: 'gledger', component: GledgerComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'stock', component: StockComponent },
    // { path: 'friends', component: ReportsComponent },
    // { path: 'friends/:friendId', component: FriendComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


// import { ModuleWithProviders } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { FeedComponent } from './feed/feed.component';
// import { FriendComponent } from './friend/friend.component';
// import { FriendsComponent } from './friends/friends.component';
// import { MessagesComponent } from './messages/messages.component';

// const appRoutes: Routes = [
//     { path: '', redirectTo: '/feed', pathMatch: 'full' },
//     { path: 'feed', component: FeedComponent },
//     { path: 'friends', component: FriendsComponent },
//     { path: 'friends/:friendId', component: FriendComponent },
//     { path: 'messages', component: MessagesComponent },
// ];

// export const appRoutingProviders: any[] = [

// ];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
