/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibToolbar from "~/../bib-shared/components/Molecules/BibToolbar"; 



 const factory = () => {
   return shallowMount(BibToolbar, {
            propsData:{
                label: true,
                transparent: true
            }
   });
 };
 
 describe("Bib Toolbar", () => {
   test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });