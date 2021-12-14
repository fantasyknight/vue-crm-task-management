/**
 * @jest-environment jsdom
 */
 import { shallowMount, mount } from "@vue/test-utils";
 import BibDropdown from "~/../bib-shared/components/Molecules/BibDropdown"; 
 import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 
 import BibInput from "~/../bib-shared/components/Atoms/BibInput"; 
 import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 
 import BibCheckbox from "~/../bib-shared/components/Atoms/BibCheckbox"; 
 import BibRadio from "~/../bib-shared/components/Atoms/BibRadio"; 

 const factory = () => {
   return shallowMount(BibDropdown, {
       components:{BibButton,BibInput,BibAvatar,BibCheckbox,BibRadio},
       propsData:{
           title: "Dropdown",
           filter: true,
           id: "xxx-xxxx",
           controls: true,
           type: "toggle",
           items:[{
            label : "User #1",
            type : "shape",
            size : "sm",
            shape:{
                type: "circle",
                icon:"/img/avatar-1.png"
            },
            setting: "elipsis",
            hover: null
        },{
            label : "User #2",
            type : "shape",
            size : "sm",
            shape:{
                type: "circle",
                icon:"/img/avatar-1.png"
            },
            setting: "elipsis",
            hover: null
        },]
       }
   });
 };
 
 describe("Bib Dropdown", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });