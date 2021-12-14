/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibSidebar from "~/../bib-shared/components/Molecules/BibSidebar"; 
 import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 
 import BibBlock from "~/../bib-shared/components/Atoms/BibBlock"; 

 const factory = () => {
   return mount(BibSidebar, {
            components:{
                BibAvatar, BibBlock
            }
   });
 };
 
 describe("Bib Sidebar", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });