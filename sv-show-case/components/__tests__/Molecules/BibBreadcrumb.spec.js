/**
 * @jest-environment jsdom
 */

 import { mount } from "@vue/test-utils";
 import BibBreadcrumb from "~/../bib-shared/components/Molecules/BibBreadcrumb"; 
 import BibLink from "~/../bib-shared/components/Atoms/BibLink"; 

 
 const factory = () => {
   return mount(BibBreadcrumb, {
      components: { BibLink },
      propsData: {
       links: [{label: 'Link 1',variant: 'success'},
       {label: 'Link 2',variant: 'success'}]
     }
   });
 };
 
 describe("Bib Breadcrumb", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });