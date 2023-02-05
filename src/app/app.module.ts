import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {SocialMediaLoginModule} from './social-login/social-media-login.module';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { PluckComponent } from './pluck/pluck.component';
import { SharereplyComponent } from './sharereply/sharereply.component';
import { TakewhileComponent } from './takewhile/takewhile.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { RetrywhenComponent } from './retrywhen/retrywhen.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { ZipComponent } from './zip/zip.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { MapComponent } from './map/map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ConcatmapComponent,
    PluckComponent,
    SharereplyComponent,
    TakewhileComponent,
    ForkjoinComponent,
    RetrywhenComponent,
    MergeComponent,
    MergemapComponent,
    SwitchmapComponent,
    ExhaustmapComponent,
    ZipComponent,
    CombinelatestComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialMediaLoginModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
