/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibSignPad from "~/../bib-shared/components/Molecules/BibSignPad"; 
 import VueSignaturePad from 'vue-signature-pad';

 const factory = () => {
   return shallowMount(BibSignPad, {
            components:{
                VueSignaturePad
            },
            stubs:{
                VueSignaturePad: true
            }
   });
 };
 
 describe("Bib SignPad", () => {
   test("mounts properly", () => {
        const wrapper = factory();
        jest.createMockFromModule('tesseract.js');
        expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     jest.createMockFromModule('tesseract.js');
     expect(wrapper.html()).toMatchSnapshot();
   });
 });