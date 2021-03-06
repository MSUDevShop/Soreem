import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsPage } from '../pages/products/products';
import { ProductContentPage } from '../pages/product-content/product-content';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage }  from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { FemaleCampaignPage } from '../pages/femaleCampaign/femaleCampaign';
import { ShowsPage } from '../pages/shows/shows';
import { ReturnPolicyPage } from '../pages/returnPolicy/returnPolicy';
import { LookBookPage } from '../pages/lookbook/lookbook';
import { CartPage } from '../pages/cart/cart';
import { CheckOutPage } from '../pages/checkout/checkout';
import { CollectionsPage } from '../pages/collections/collections';
import { ShippingPage } from '../pages/shipping/shipping';
import { ContactPage } from '../pages/contact/contact';
import { ShowContentPage } from '../pages/show-content/show-content';
import { SignupPage } from '../pages/signup/signup';
import { ApolloModule } from 'angular2-apollo';
import { provideClient } from './client';
import { Stripe } from '@ionic-native/stripe';
import { CardIO } from '@ionic-native/card-io';
import { EmailComposer } from '@ionic-native/email-composer';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FaqPage,
    ProfilePage,
    ProductsPage,
    ProductContentPage,
    TabsPage,
    LoginPage,
    SettingsPage,
    FemaleCampaignPage,
    ShowsPage,
    ReturnPolicyPage,
    LookBookPage,
    CartPage,
    CheckOutPage,
    CollectionsPage,
    ShippingPage,
    ShowContentPage,
    ContactPage,
    SignupPage
  ],
  imports: [
    ApolloModule.withClient(provideClient),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FaqPage,
    ProfilePage,
    ProductsPage,
    ProductContentPage,
    TabsPage,
    LoginPage,
    SettingsPage,
    FemaleCampaignPage,
    ShowsPage,
    ReturnPolicyPage,
    LookBookPage,
    CartPage,
    CheckOutPage,
    CollectionsPage,
    ShippingPage,
    ShowContentPage,
    ContactPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Stripe, CardIO, EmailComposer]
})
export class AppModule {}
