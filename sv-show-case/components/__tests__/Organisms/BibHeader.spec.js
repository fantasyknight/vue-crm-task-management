/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibHeader from "~/../bib-shared/components/Organisms/BibHeader"; 
 import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 
 import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 
 import BibInput from "~/../bib-shared/components/Atoms/BibInput"; 
 import BibBlock from "~/../bib-shared/components/Atoms/BibBlock"; 

 const factory = () => {
   return shallowMount(BibHeader, {
            components:{ BibAvatar, BibButton, BibInput, BibBlock},
        
   });
 };
 
 describe("Bib Header", () => {
   test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });