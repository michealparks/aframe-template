import type { ComponentDefinition } from 'aframe';

export const element = <T = Required<ComponentDefinition>['el']>(component: ComponentDefinition) => (
  component.el as T
)

export const object = <T = THREE.Object3D>(component: ComponentDefinition) => (
  element(component).object3D as T
)

export const position = (component: ComponentDefinition) => (
  object(component).position
)

export const data = <T = unknown>(component: ComponentDefinition) => (
  component.data as T
)
