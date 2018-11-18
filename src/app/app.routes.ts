import { Routes, RouterModule } from '@angular/router';
import {
  BrowseProjectsComponent,
  FaqsComponent,
  FourOhFourComponent,
  HelpWantedComponent,
  HomeComponent,
  HomeLayoutComponent,
  PrivacyPolicyComponent,
  RoadmapComponent,
  SchemaValidatorComponent,
  SearchResultsComponent,
  SharedLayoutComponent,
  RepoComponent,
} from './utils/app-components';
import { EXPLORE_CODE_ROUTES } from './routes/explore-code';
import { POLICY_GUIDE_ROUTES } from './routes/policy-guide';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeLayoutComponent, children: [{ path: '', component: HomeComponent }]},
  {
    path: '',
    component: SharedLayoutComponent,
    children: [
      ...EXPLORE_CODE_ROUTES,
      ...POLICY_GUIDE_ROUTES,
      { path: 'search', component: SearchResultsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'roadmap', component: RoadmapComponent },
      {path: 'browse-projects',
        loadChildren: './components/browse-projects/browse-projects-routing.module#BrowseProjectsModule'},
      { path: 'browse-projects', component: BrowseProjectsComponent },
      { path: 'open-tasks', component: HelpWantedComponent },
      { path: '**', component: FourOhFourComponent },
    ]
  },
];
