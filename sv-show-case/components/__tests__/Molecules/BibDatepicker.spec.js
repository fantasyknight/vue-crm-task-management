/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibDatepicker from "~/../bib-shared/components/Molecules/BibDatepicker"; 
 import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 

 const factory = () => {
   return mount(BibDatepicker, {
       components:{BibAvatar},
       propsData:{
           double: true
       },
       stubs:{
        BibAvatar: true
       }
   });
 };
 
 describe("Bib Date Picker", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });