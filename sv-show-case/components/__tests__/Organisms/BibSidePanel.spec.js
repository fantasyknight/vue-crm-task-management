/**
* @jest-environment jsdom
*/
import { shallowMount, mount } from "@vue/test-utils";
import BibSidePanel from "~/../bib-shared/components/Organisms/BibSidePanel"; 
import BibPanelWrapper from "~/../bib-shared/components/Molecules/BibPanelWrapper"; 
import BibFormGroup from "~/../bib-shared/components/Molecules/BibFormGroup"; 
import BibAvatar from "~/../bib-shared/components/Atoms/BibAvatar"; 
import BibTabs from "~/../bib-shared/components/Atoms/BibTabs"; 
import BibButton from "~/../bib-shared/components/Atoms/BibButton"; 
import BibInput from "~/../bib-shared/components/Atoms/BibInput"; 

const $nuxt = {
    $on: () => { return false }
}

const factory = () => {
    return shallowMount(BibSidePanel, {
        components:{ BibPanelWrapper, BibButton, BibAvatar, BibInput, BibFormGroup, BibTabs},
        propsData:{
            item : {
                active: false,
                cells:[
                    {name : 'id', value: 1},
                    {name : 'type', value: "task"},
                    {name : 'liked', value: true},
                    {name : 'task', value:{label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…", check: false}},
                    {name : 'project', value: "BIB Library"},
                    {name : 'priority', value: {class:"primary", label:"Low Priority"}},
                    {name : 'status', value: {class:"primary", label:"In-Progress", digits:"75"}},
                    {name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
                    {name : 'date', value: "Mar-11"},
                    {name : 'time', value: "4"},
                    {name : 'budget', value: "4000"},
                    {name : 'rows', value: []}
                ]	
            }
        },
        mocks:{
            $nuxt
        },
        stubs:{
            BibButton: true,
            BibAvatar: true
        },
        directives:{
            'gridby': {},
            'rowby' : {}
        }
    });
};

describe("Bib Side Panel", () => {
    test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
    });
    
    test("renders properly", () => {
        const wrapper = factory()
        expect(wrapper.html()).toMatchSnapshot();
    });
});