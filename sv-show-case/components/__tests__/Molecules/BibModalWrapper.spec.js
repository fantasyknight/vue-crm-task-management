/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibModalWrapper from "~/../bib-shared/components/Molecules/BibModalWrapper"; 
 import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 

 
 const factory = () => {
   return shallowMount(BibModalWrapper, {
       components:{BibButton},
       propsData:{
           title: "Modal Wrapper"
       },
       stubs: {
        BibButton: true
      }
   });
 };
 
 describe("Bib Modal Wrapper", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });