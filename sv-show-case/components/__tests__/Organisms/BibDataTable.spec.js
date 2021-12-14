/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibDataTable from "~/../bib-shared/components/Organisms/BibDataTable"; 
 import BibToolbar from "~/../bib-shared/components/Molecules/BibToolbar"; 
 import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 

 const $nuxt = {
    $on: () => { return false }
}

 const factory = () => {
   return shallowMount(BibDataTable, {
            components:{ BibToolbar, BibButton},
            stubs:{
                BibButton: true
            },
            directives:{
                'click-outside': {},
                'columns-resizable': {}
              },
            mocks: { 
               $nuxt
             },  
   });
 };
 
 describe("Bib Data Table", () => {
   test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });