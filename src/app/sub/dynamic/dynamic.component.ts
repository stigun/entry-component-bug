import { ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

const componentLookupRegistry: Map<string, any> = new Map();

// ReSharper disable once InconsistentNaming
export const ComponentLookup = (key: string): any => {
  return (cls: any) => {
    componentLookupRegistry.set(key, cls);
  };
};

@Component({
  selector: 'app-dynamic',
  template: `<template #container></template>`
})
export class DynamicComponent implements OnDestroy, AfterViewInit {
  private componentRef: ComponentRef<any> = null as unknown as ComponentRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) container: any;

  constructor(
    private readonly resolver: ComponentFactoryResolver
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.createComponent('test'));
  }

  ngOnDestroy(): void {
    this.componentRef?.destroy();
  }

  private createComponent(name: string) {
    this.container.clear();
    console.log(componentLookupRegistry);
    const type = componentLookupRegistry.get(name);
    console.log(`${name} = ${type}`);
    if (!type) { return; }

    const factory = this.resolver.resolveComponentFactory(type);
    console.log(factory);
    this.componentRef = this.container.createComponent(factory);
  }
}
