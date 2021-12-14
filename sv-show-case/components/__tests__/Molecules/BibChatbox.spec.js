/**
 * @jest-environment jsdom
 */

 import { mount } from "@vue/test-utils";
 import BibChatbox from "~/../bib-shared/components/Molecules/BibChatbox"; 
 import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 
 import BibLink from "~/../bib-shared/components/Atoms/BibLink"; 
 
 const factory = () => {
   return mount(BibChatbox, {
      components: { BibAvatar,BibLink },
      propsData: {
        img: "/img/avatar-2.png",
        text: "Do sint mollit ad mollit voluptate quis.",
        date: '20-June'
     }
   });
 };
 
 describe("Bib Chatbox", () => {
   test("mounts properly", () => {
     const wrapper = factory();
       expect(wrapper.vm).toBeTruthy();
   });
 
   test("renders properly", () => {
     const wrapper = factory()
     expect(wrapper.html()).toMatchSnapshot();
   });
 });