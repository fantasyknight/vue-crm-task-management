/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibUploader from "~/../bib-shared/components/Molecules/BibUploader"; 
 import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 


 const factory = () => {
   return shallowMount(BibUploader, {
            components:{BibAvatar},
            propsData:{
                accept: "image"
            },
            directives:{
              'click-outside': {}
            },
            stubs:{
                BibAvatar: true
            }
   });
 };
 
 describe("Bib Uploader", () => {
   test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });