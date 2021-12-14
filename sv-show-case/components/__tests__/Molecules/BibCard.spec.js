/**
 * @jest-environment jsdom
 */

 import { mount } from "@vue/test-utils";
 import BibBreadcrumb from "~/../bib-shared/components/Molecules/BibBreadcrumb"; 
 import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 

 
 const factory = () => {
   return mount(BibBreadcrumb, {
      components: { BibButton },
      propsData: {
        label: "Label",
        outline: true,
        value: true
     }
   });
 };
 
 describe("Bib Card", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });