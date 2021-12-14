/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibPanelWrapper from "~/../bib-shared/components/Molecules/BibPanelWrapper"; 

 const factory = () => {
   return mount(BibPanelWrapper, {

   });
 };
 
 describe("Bib Panel Wrapper", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });