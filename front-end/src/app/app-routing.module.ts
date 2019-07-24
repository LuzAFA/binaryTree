import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TreeDiagramComponent} from "./tree-diagram/tree-diagram.component";
import {ListTreeComponent} from "./list-trees/list-tree.component";

const routes: Routes = [
  {path: 'new', component: TreeDiagramComponent},
  {path: '', component: ListTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
