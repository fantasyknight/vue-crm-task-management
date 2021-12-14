/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibFormGroup from "~/../bib-shared/components/Molecules/BibFormGroup"; 

 const factory = () => {
   return shallowMount(BibFormGroup, {
       propsData:{
           label: "Form Group"
       }
   });
 };
 
 describe("Bib Form Group", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });