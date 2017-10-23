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

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MenuComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UserService, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
