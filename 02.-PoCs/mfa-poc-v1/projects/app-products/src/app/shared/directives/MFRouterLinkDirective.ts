import { Directive, ElementRef, HostListener, inject, input, Input, OnInit } from '@angular/core';
import { MFNavigateService } from '../services/MFNavigateService';
import { Router } from '@angular/router';

@Directive({
  selector: '[mfRouterLink]'
})
export class MFRouterLinkDirective implements OnInit {

  readonly mfRouterLink = input<any>("");
  readonly routerLinkActive = input<any>();
  readonly queryParams = input<any>();

  private mfNavigateService= inject(MFNavigateService)

  private elementRef = inject(ElementRef)

  //private router = inject(Router)

  ngOnInit(): void {
    this.suscribeNavigation();
    this.isActive();
  }

  @HostListener('click')
  navigate(): void {

    console.log('@HostListener- click')

    console.log(this.mfRouterLink())

    console.log(this.queryParams())

    //this.router.navigate([this.mfRouterLink()],{ queryParams: this.queryParams()})
    this.mfNavigateService.navigate(this.mfRouterLink(), { queryParams: this.queryParams() });
  }

  suscribeNavigation(): void {
    this.mfNavigateService.navigation.subscribe(() => {
      this.isActive();
    });
  }

  isActive(): void {
    if (this.routerLinkActive()) {
      if (window.location.pathname === this.mfRouterLink()) {
        this.elementRef.nativeElement.classList.add(this.routerLinkActive());
      } else {
        //if(this.routerLinkActive()){
          this.elementRef.nativeElement.classList.remove(this.routerLinkActive());
        //}
      }
    }
  }
}
