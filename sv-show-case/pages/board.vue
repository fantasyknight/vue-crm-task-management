<template>
  <div class="d-flex">
    <NavigationSideBar :menu="boardMenu" />
    <div class="board">
      <div class="board__unit">
        <span class="board__unit__title" id="color-system"> Color System </span>
        <div class="board__unit__component">
          <span class="board__unit__component__title"> Color Variants </span>

          <div
            class="board__unit__component__content color-content"
            v-rowby="'25.75'"
          >
            <span>.bg-{variant} <br />.text-{variant} </span>
            <div class="box ml-2">
              <div class="item" v-rowby="'25.75'">
                <div class="bg-primary" style="width: 100%; height: 50px"></div>
                <div class="text-primary ml-2">primary (#1f42a2)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-primary-sub1"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-primary-sub1 ml-2">primary-sub1 (#7287c3)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-primary-sub2"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-primary-sub2 ml-2">primary-sub2 (#9eacd4)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-primary-sub3"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-primary-sub3 ml-2">primary-sub3 (#c8cfe4)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-success" style="width: 100%; height: 50px"></div>
                <div class="text-success ml-2">success (#2ba026)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-success-sub1"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-success-sub1 ml-2">success-sub1 (#7ac072)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-success-sub2"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-success-sub2 ml-2">success-sub2 (#a3d29e)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-success-sub3"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-success-sub3 ml-2">success-sub3 (#cae2c9)</div>
              </div>
            </div>

            <div class="box ml-2">
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-secondary"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-secondary ml-2">secondary (#86868a)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-secondary-sub1"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-secondary-sub1 ml-2">
                  secondary-sub1 (#b1b1b4)
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-secondary-sub2"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-secondary-sub2 ml-2">
                  secondary-sub2 (#dcdcdf)
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-secondary-sub3"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-secondary-sub3 ml-2">
                  secondary-sub3 (#f2f2f5)
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-danger" style="width: 100%; height: 50px"></div>
                <div class="text-danger ml-2">danger (#d9000d)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-danger-sub1"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-danger-sub1 ml-2">danger-sub1 (#e26062)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-danger-sub2"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-danger-sub2 ml-2">danger-sub2 (#e99293)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-danger-sub3"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-danger-sub3 ml-2">danger-sub3 (#eec2c4)</div>
              </div>
            </div>

            <div class="box ml-2">
              <div class="item" v-rowby="'25.75'">
                <div class="bg-warning" style="width: 100%; height: 50px"></div>
                <div class="text-warning ml-2">warning (#f7b500)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-warning-sub1"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-warning-sub1 ml-2">warning-sub1 (#f4de6c)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-warning-sub2"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-warning-sub2 ml-2">warning-sub2 (#f8e893)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-warning-sub3"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-warning-sub3 ml-2">warning-sub3 (#f5edc4)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-black" style="width: 100%; height: 50px"></div>
                <div class="text-black ml-2">black (#000000)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-dark" style="width: 100%; height: 50px"></div>
                <div class="text-dark ml-2">dark (#1d1d20)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-dark-sub1"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-dark-sub1 ml-2">dark-sub1 (#2E2F31)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div
                  class="bg-dark-sub2"
                  style="width: 100%; height: 50px"
                ></div>
                <div class="text-dark-sub2 ml-2">dark-sub2 (#18181A)</div>
              </div>
            </div>

            <div class="box ml-2">
              <div class="item" v-rowby="'25.75'">
                <div class="bg-gray1" style="width: 100%; height: 50px"></div>
                <div class="text-gray1 ml-2">gray1 (#6d7278)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-gray2" style="width: 100%; height: 50px"></div>
                <div class="text-gray2 ml-2">gray2 (#6d7278)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-gray3" style="width: 100%; height: 50px"></div>
                <div class="text-gray3 ml-2">gray3 (#6d7278)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-gray4" style="width: 100%; height: 50px"></div>
                <div class="text-gray4 ml-2">gray4 (#6d7278)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-gray5" style="width: 100%; height: 50px"></div>
                <div class="text-gray5 ml-2">gray5 (#6d7278)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-gray6" style="width: 100%; height: 50px"></div>
                <div class="text-gray6 ml-2">gray6 (#6d7278)</div>
              </div>
            </div>

            <div class="box ml-2">
              <div class="item" v-rowby="'25.75'">
                <div class="bg-light" style="width: 100%; height: 50px"></div>
                <div class="text-dark ml-2">light (#f2f2f5)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-white" style="width: 100%; height: 50px"></div>
                <div class="text-dark ml-2">white (#ffffff)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-orange" style="width: 100%; height: 50px"></div>
                <div class="text-orange ml-2">orange (#FF7F00)</div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div class="bg-purple" style="width: 100%; height: 50px"></div>
                <div class="text-purple ml-2">purple (#7B00C7)</div>
              </div>
            </div>
          </div>
        </div>

        <span class="board__unit__title" id="atoms"> Atoms </span>

        <div class="board__unit__component" id="bib-button">
          <span class="board__unit__component__title">BibButton</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button
                    label="FREE"
                    variant="success"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="New"
                    variant="primary"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="secondary"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="danger"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="warning"
                    class="mb-1"
                  ></bib-button>
                  <div class="bg-white p-1">
                    <bib-button
                      label="Button"
                      variant="light"
                      class="mb-1"
                    ></bib-button>
                  </div>
                  <br /><br />
                  <bib-button
                    label="Featured"
                    variant="primary--light"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Updated"
                    variant="success--light"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Featured"
                    variant="secondary--light"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Updated"
                    variant="danger--light"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Updated"
                    variant="warning--light"
                    class="mb-1"
                  ></bib-button>
                  <br /><br />
                  <bib-button
                    label="Button"
                    variant="primary--outline"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="success--outline"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="secondary--outline"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="danger--outline"
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    variant="warning--outline"
                    class="mb-1"
                  ></bib-button>
                </div>
                <div
                  class="code"
                  v-text='
                    `
                  <bib-button label=&quot;FREE&quot; variant=&quot;success&quot;></bib-button>
                  <bib-button label=&quot;New&quot; variant=&quot;primary&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;secondary&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;danger&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;warning&quot;></bib-button>
                  
                  <div class="bg-white p-1">
                  <bib-button label=&quot;Button&quot; variant=&quot;light&quot;></bib-button>
                  </div>
                  
                  <bib-button label=&quot;Featured&quot; variant=&quot;primary--light&quot;></bib-button>
                  <bib-button label=&quot;Updated&quot; variant=&quot;success--light&quot;></bib-button>
                  <bib-button label=&quot;Featured&quot; variant=&quot;secondary--light&quot;></bib-button>
                  <bib-button label=&quot;Updated&quot; variant=&quot;danger--light&quot;></bib-button>
                  <bib-button label=&quot;Updated&quot; variant=&quot;warning--light&quot;></bib-button>
                  
                  <bib-button label=&quot;Button&quot; variant=&quot;primary--outline&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;success--outline&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;secondary--outline&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;danger--outline&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; variant=&quot;warning--outline&quot;></bib-button>
                `
                  '
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span
              >size (lg, md, sm) <br />
              (default: md)</span
            >
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button
                    label="Button"
                    size="lg"
                    variant="primary"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    size="md"
                    variant="primary"
                  ></bib-button>
                  <bib-button
                    label="Button"
                    size="sm"
                    variant="primary"
                  ></bib-button>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                  <bib-button label=&quot;Button&quot; size=&quot;lg&quot; variant=&quot;primary&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; size=&quot;md&quot; variant=&quot;primary&quot;></bib-button>
                  <bib-button label=&quot;Button&quot; size=&quot;sm&quot; variant=&quot;primary&quot;></bib-button>
                `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>pill style</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button
                    label="Invite"
                    variant="primary"
                    pill
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success"
                    pill
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger"
                    pill
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="primary--outline"
                    pill
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success--outline"
                    pill
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger--light"
                    pill
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    size="lg"
                    variant="success"
                    pill
                    class="w-100 mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    size="lg"
                    variant="success"
                    pill
                    class="w-75 mb-1"
                  ></bib-button>
                  <div class="bg-white p-1">
                    <bib-button
                      label="Cancel"
                      size="lg"
                      variant="light"
                      pill
                      class="mb-1"
                    ></bib-button>
                    <bib-button
                      label="Create"
                      size="lg"
                      variant="success"
                      pill
                      class="mb-1"
                    ></bib-button>
                  </div>
                </div>
                <div
                  class="code"
                  v-text='`
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary&quot; pill></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success&quot; pill></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger&quot; pill></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary--outline&quot; pill></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success--outline&quot; pill></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger--light&quot; pill></bib-button>

                  <bib-button label="Invite" size="lg" variant="success" pill class="w-100"></bib-button>
                  <bib-button label="Invite" size="lg" variant="success" pill class="w-75"></bib-button>

                  <div class="bg-white p-1">
                    <bib-button label="Cancel" size="lg" variant="light" pill></bib-button>
                    <bib-button label="Create" size="lg" variant="success" pill></bib-button>
                  </div>
                `'
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>squared style</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button
                    label="Invite"
                    variant="primary"
                    squared
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success"
                    squared
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger"
                    squared
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="primary--outline"
                    squared
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success--outline"
                    squared
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger--light"
                    squared
                    class="mb-1"
                  ></bib-button>
                </div>
                <div
                  class="code"
                  v-text='`
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary&quot; squared></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success&quot; squared></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger&quot; squared></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary--outline&quot; squared></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success--outline&quot; squared></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger--light&quot; squared></bib-button>
                `'
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>disabled</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button
                    label="Invite"
                    variant="primary"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="primary--light"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="primary--outline"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success--light"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="success--outline"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="secondary"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="secondary--light"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="secondary--outline"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger--light"
                    disabled
                    class="mb-1"
                  ></bib-button>
                  <bib-button
                    label="Invite"
                    variant="danger--outline"
                    disabled
                    class="mb-1"
                  ></bib-button>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary--light&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;primary--outline&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success-light&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;success-outline&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;secondary&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;secondary--light&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;secondary--outline&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger-light&quot; disabled></bib-button>
                  <bib-button label=&quot;Invite&quot; variant=&quot;danger-outline&quot; disabled></bib-button>
                `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'" id="dropdown">
            <span>dropdown</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button dropdown="elipsis" label="Click Toggle">
                      <template v-slot:menu>
                          <ul>
                              <li>List item 1</li>
                              <li>List item 2</li>
                              <li>List item 3</li>
                              <li>List item 4</li>
                          </ul>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                  <bib-button dropdown="elipsis" label="Click Toggle">
                      <template v-slot:menu>
                          <ul>
                              <li>List item 1</li>
                              <li>List item 2</li>
                              <li>List item 3</li>
                              <li>List item 4</li>
                          </ul>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>dropdown1</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button
                    dropdown1="add"
                    label="Add participants"
                    opend-label="Select or invite participants"
                    icon-variant="success"
                  >
                      <template v-slot:menu>
                          <ul>
                              <li @click="dd1ItemClick(1)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(2)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(3)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(4)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(0)">
                                <div class="d-flex">
                                  <bib-icon icon="add" variant="success" :scale="1.2"></bib-icon>
                                  <span class="ml-05"> Invite Participant </span>
                                </div>
                              </li>
                          </ul>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                  <bib-button
                    dropdown1="add"
                    label="Add participants"
                    opend-label="Select or invite participants"
                    icon-variant="success"
                  >
                      <template v-slot:menu>
                          <ul>
                              <li @click="dd1ItemClick(1)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(2)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(3)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(4)">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05"> Persons Name </span>
                              </li>
                              <li @click="dd1ItemClick(0)">
                                <div class="d-flex">
                                  <bib-icon icon="add" variant="success" :scale="1.2"></bib-icon>
                                  <span class="ml-05"> Invite Participant </span>
                                </div>
                              </li>
                          </ul>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'" id="popup">
            <span>pop</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">List item 1</span>
                              <span class="list__item">List item 2</span>
                              <span class="list__item">List item 3</span>
                              <span class="list__item">List item 4</span>
                          </div>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">List item 1</span>
                              <span class="list__item">List item 2</span>
                              <span class="list__item">List item 3</span>
                              <span class="list__item">List item 4</span>
                          </div>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05">List item 1</span>
                              </span>
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05">List item 2</span>
                              </span>
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05">List item 3</span>
                              </span>
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span class="ml-05">List item 4</span>
                              </span>
                          </div>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span>List item 1</span>
                              </span>
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span>List item 2</span>
                              </span>
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span>List item 3</span>
                              </span>
                              <span class="list__item">
                                <bib-avatar size="1.5rem"></bib-avatar>
                                <span>List item 4</span>
                              </span>
                          </div>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">List item 1</span>
                              <span class="list__item">List item 2</span>
                              <span class="list__item">List item 3</span>
                              <span class="list__item">List item 4</span>
                          </div>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">
                                <div class="d-flex" style="align-items: center">
                                  <span>List item 1</span>
                                  <bib-avatar size="1.5rem" class="ml-auto"></bib-avatar>
                                </div>
                              </span>
                              <span class="list__item">
                                <div class="d-flex" style="align-items: center">
                                  <span>List item 2</span>
                                  <bib-avatar size="1.5rem" class="ml-auto"></bib-avatar>
                                </div>
                              </span>
                              <span class="list__item">
                                <div class="d-flex" style="align-items: center">
                                  <span>List item 3</span>
                                  <bib-avatar size="1.5rem" class="ml-auto"></bib-avatar>
                                </div>
                              </span>
                              <span class="list__item">
                                <div class="d-flex" style="align-items: center">
                                  <span>List item 4</span>
                                  <bib-avatar size="1.5rem" class="ml-auto"></bib-avatar>
                                </div>
                              </span>
                          </div>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>popup with separated lines</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">Open folder</span>
                              <span class="list__item">Show details</span>
                              <hr>
                              <span class="list__item">
                                <bib-icon icon="upload" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Upload to folder...
                              </span>
                              <span class="list__item">
                                <bib-icon icon="download" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Download
                              </span>
                              <span class="list__item">
                                <bib-icon icon="heart-like" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Add to favorites
                              </span>
                              <span class="list__item">
                                <bib-icon icon="user-add" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Share with
                              </span>
                              <span class="list__item">
                                <bib-icon icon="comment-forum" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Converstion
                              </span>
                              <span class="list__item">
                                <bib-icon icon="pencil" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Rename
                              </span>
                              <span class="list__item">
                                <bib-icon icon="duplicate" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Copy
                              </span>
                              <span class="list__item">
                                <bib-icon icon="copy-file" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Paste
                              </span>
                              <span class="list__item">
                                <bib-icon icon="transfer" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Move to
                              </span>
                              <span class="list__item">
                                <bib-icon icon="warning" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Report
                              </span>
                              <hr>
                              <span class="list__item danger">
                                Delete
                              </span>
                          </div>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">Open folder</span>
                              <span class="list__item">Show details</span>
                              <hr>
                              <span class="list__item">
                                <bib-icon icon="upload" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Upload to folder...
                              </span>
                              <span class="list__item">
                                <bib-icon icon="download" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Download
                              </span>
                              <span class="list__item">
                                <bib-icon icon="heart-like" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Add to favorites
                              </span>
                              <span class="list__item">
                                <bib-icon icon="user-add" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Share with
                              </span>
                              <span class="list__item">
                                <bib-icon icon="comment-forum" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Converstion
                              </span>
                              <span class="list__item">
                                <bib-icon icon="pencil" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Rename
                              </span>
                              <span class="list__item">
                                <bib-icon icon="duplicate" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Copy
                              </span>
                              <span class="list__item">
                                <bib-icon icon="copy-file" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Paste
                              </span>
                              <span class="list__item">
                                <bib-icon icon="transfer" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Move to
                              </span>
                              <span class="list__item">
                                <bib-icon icon="warning" :scale="1.1" variant="gray5" class="mr-075"></bib-icon> Report
                              </span>
                              <hr>
                              <span class="list__item danger">
                                Delete
                              </span>
                          </div>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>multiple pop</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">List item 1</span>
                              <span class="list__item">List item 2</span>
                              <span class="list__item">
                                <div class="d-flex w-100" style="align-items: center;">
                                  <span> List item 3 </span>
                                  <bib-button pop="arrowhead-right" style="margin-left: auto;">
                                      <template v-slot:menu>
                                          <div class="list">
                                              <span class="list__item">List item 1</span>
                                              <span class="list__item">List item 2</span>
                                              <span class="list__item">List item 3</span>
                                              <span class="list__item">List item 4</span>
                                          </div>
                                      </template>
                                  </bib-button>
                                </div>
                              </span>
                              <span class="list__item">List item 4</span>
                          </div>
                      </template>
                  </bib-button>
                </div>
                <div class="code" v-text='`
                  <bib-button pop="elipsis">
                      <template v-slot:menu>
                          <div class="list">
                              <span class="list__item">List item 1</span>
                              <span class="list__item">List item 2</span>
                              <span class="list__item">
                                <div class="d-flex" style="align-items: center;">
                                  <span> List item 3 </span>
                                  <bib-button pop="arrowhead-right" style="margin-left: auto;">
                                      <template v-slot:menu>
                                          <div class="list">
                                              <span class="list__item">List item 1</span>
                                              <span class="list__item">List item 2</span>
                                              <span class="list__item">List item 3</span>
                                              <span class="list__item">List item 4</span>
                                          </div>
                                      </template>
                                  </bib-button>
                                </div>
                              </span>
                              <span class="list__item">List item 4</span>
                          </div>
                      </template>
                  </bib-button>
                `'>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-input">
          <span class="board__unit__component__title">BibInput</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>default</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-input
                  type="text"
                  v-model="form.name"
                  name="name"
                  placeholder="Type your name"
                  label="Default"
                  required
                  instruction="Enter at least 3 letters"
                >
                </bib-input>
                <div
                  class="code"
                  v-text="
                    `
                          <bib-input
                            type=&quot;text&quot;
                            v-model=&quot;form.name&quot;
                            name=&quot;name&quot;
                            placeholder=&quot;Type your name&quot;
                            label=&quot;Default&quot;
                            required
                            instruction=&quot;Enter at least 3 letters&quot;
                          ></bib-input>
                          `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant (alert, warning, accepted)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    v-model="form.name"
                    placeholder="Type your name"
                    label="Alert"
                    instruction="Enter at least 3 letters"
                    variant="alert"
                  >
                  </bib-input>
                  <br />
                  <bib-input
                    v-model="form.name"
                    placeholder="Type your name"
                    label="Warning"
                    instruction="Enter at least 3 letters"
                    variant="warning"
                  >
                  </bib-input>
                  <br />
                  <bib-input
                    v-model="form.name"
                    placeholder="Type your name"
                    label="Accepted"
                    instruction="Enter at least 3 letters"
                    variant="accepted"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                          <bib-input
                            v-model=&quot;form.name&quot;
                            placeholder=&quot;Type your name&quot;
                            label=&quot;Alert&quot;
                            instruction=&quot;Enter at least 3 letters&quot;
                            variant=&quot;alert&quot;
                          >
                          </bib-input>

                          <bib-input
                            v-model=&quot;form.name&quot;
                            placeholder=&quot;Type your name&quot;
                            label=&quot;Warning&quot;
                            instruction=&quot;Enter at least 3 letters&quot;
                            variant=&quot;warning&quot;
                          >
                          </bib-input>

                          <bib-input
                            v-model=&quot;form.name&quot;
                            placeholder=&quot;Type your name&quot;
                            label=&quot;Accepted&quot;
                            instruction=&quot;Enter at least 3 letters&quot;
                            variant=&quot;accepted&quot;
                          >
                          </bib-input>
                        `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>disabled</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-input
                  type="text"
                  v-model="form.name"
                  placeholder="Type your name"
                  label="Default"
                  instruction="Enter at least 3 letters"
                  disabled
                >
                </bib-input>
                <div
                  class="code"
                  v-text="
                    `
                          <bib-input
                            type=&quot;text&quot;
                            v-model=&quot;form.name&quot;
                            placeholder=&quot;Type your name&quot;
                            label=&quot;Default&quot;
                            instruction=&quot;Enter at least 3 letters&quot;
                            disabled
                          ></bib-input>
                          `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>size(sm, md, lg)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="text"
                    v-model="form.name"
                    placeholder="Type your name"
                    label="Small"
                    size="sm"
                  >
                  </bib-input>
                  <bib-input
                    type="text"
                    v-model="form.name"
                    placeholder="Type your name"
                    label="Default"
                    size="md"
                  >
                  </bib-input>
                  <bib-input
                    type="text"
                    v-model="form.name"
                    placeholder="Type your name"
                    label="Large"
                    size="lg"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                            <bib-input type=&quot;text&quot; v-model=&quot;form.name&quot; placeholder=&quot;Type your name&quot; label=&quot;Small&quot; size=&quot;sm&quot;></bib-input>
                            <bib-input type=&quot;text&quot; v-model=&quot;form.name&quot; placeholder=&quot;Type your name&quot; label=&quot;Default&quot; size=&quot;md&quot;></bib-input>
                            <bib-input type=&quot;text&quot; v-model=&quot;form.name&quot; placeholder=&quot;Type your name&quot; label=&quot;Large&quot; size=&quot;lg&quot;></bib-input>
                          `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>input with icon(icon-right, icon-left)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="text"
                    placeholder="Type your name"
                    label="Right Icon"
                    icon-right="thumbs-up"
                  >
                  </bib-input>
                  <bib-input
                    type="text"
                    placeholder="Type your name"
                    label="Left Icon"
                    icon-left="file"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-input type=&quot;text&quot; placeholder=&quot;Type your name&quot; label=&quot;Right Icon&quot; icon-right=&quot;thumbs-up&quot;></bib-input>
                    <bib-input type=&quot;text&quot; placeholder=&quot;Type your name&quot; label=&quot;Left Icon&quot; icon-left=&quot;file&quot;></bib-input>
                    `
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="text"
                    placeholder="Type your email"
                    label="Custom"
                    icon-right="thumbs-up"
                    variant="accepted"
                    size="lg"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-input
                      type=&quot;email&quot;
                      placeholder=&quot;Type your email&quot;
                      label=&quot;Custom&quot;
                      icon-right=&quot;thumbs-up&quot;
                      variant=&quot;accepted&quot;
                      size=&quot;lg&quot;
                    ></bib-input>
                    `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span
              >type(text, password, email, number, date, time, color, textarea,
              select)</span
            >
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="text"
                    v-model="form.name"
                    placeholder="Type your full name"
                    label="Text"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;text&quot; v-model=&quot;form.name&quot; placeholder=&quot;Type your full name&quot; label=&quot;Text&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="email"
                    v-model="form.email"
                    placeholder="Type your email"
                    label="Email"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;email&quot; v-model=&quot;form.email&quot; placeholder=&quot;Type your email&quot; label=&quot;Email&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="password"
                    v-model="form.password"
                    placeholder="password"
                    label="Password"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;password&quot; v-model=&quot;form.password&quot; placeholder=&quot;password&quot; label=&quot;Password&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="number"
                    v-model="form.age"
                    placeholder="Type your age"
                    :min="10"
                    :max="100"
                    label="Number"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;number&quot; v-model=&quot;form.age&quot; placeholder=&quot;Type your age&quot; :min=&quot;10&quot; :max=&quot;100&quot; label=&quot;Number&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="date"
                    v-model="form.birthday"
                    placeholder="Select your birthday"
                    label="Date"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;date&quot; v-model=&quot;form.birthday&quot; placeholder=&quot;Select your birthday&quot; label=&quot;Date&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="time"
                    v-model="form.time"
                    placeholder="Select your time"
                    label="Time"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;time&quot; v-model=&quot;form.time&quot; placeholder=&quot;Select your time&quot; label=&quot;Time&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="color"
                    v-model="form.color"
                    placeholder="Choose your color"
                    label="Color"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;color&quot; v-model=&quot;form.color&quot; placeholder=&quot;Choose your color&quot; label=&quot;Color&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-input
                    type="textarea"
                    v-model="form.profile"
                    placeholder="Type about yourself"
                    label="Textarea"
                  >
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-input type=&quot;textarea&quot; v-model=&quot;form.profile&quot; placeholder=&quot;Type about yourself&quot; label=&quot;Textarea&quot;></bib-input>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'50.50'">
                <div>
                  <bib-input :selected="form.fruit[0]"
                  :options="form.fruit" 
                  size="md" 
                  type="select">
                  </bib-input>
                </div>
                <div
                  class="code"
                  v-text='
                    `<bib-input :selected="form.fruit[0]"
                                :options="form.fruit" 
                                size="md" 
                                type="select">
                                </bib-input>`'
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span></span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <div v-highlight class="highlight-code">
                  <pre class="language-javascript">
                    <code>
                      export default {
                        data() {
                          return {
                            form: {
                              name: "Jianyu Wu",
                              email: "test@gmail.com",
                              password: "123456",
                              age: 36,
                              birthday: "2021-09-22",
                              time: "11:56",
                              color: "#2ba026",
                              profile: "",
                              fruit: {
                                items: [{
                                label: 'Item #02',
                                event:"item-event",
                                img: ""
                              },
                              {
                                label: 'Item #02',
                                event:"item-event",
                                img: ""
                              },
                              {
                                label: 'Item #03',
                                event:"item-event",
                                img: ""
                              }],
                              }
                            },
                            fruitOptions: [
                              { label: "Please choose one", value: null },
                              { label: "Orange", value: "orange" },
                              { label: "Apple", value: "apple" },
                              { label: "Grape", value: "grape" },
                            ]
                          }
                        }
                      }
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>type (file)</span>
            <div class="box">
              <div class="item bg-white pd-1" v-rowby="'50.75'">
                <bib-input
                  type="file"
                  ref="filesUploaded"
                  class="pl-1"
                  @files-dropped="handleChange__FileInput"
                  variant="accepted"
                  iconLeft="upload"
                  placeholder="Drop file here or click to upload"
                ></bib-input>
                <div
                  class="code"
                  v-text='
                    `
                         <bib-input
                          type="file"
                          ref="filesUploaded"
                          variant="accepted"
                          iconLeft="upload"
                          placeholder="Drop file here or click to upload"
                        ></bib-input>
                          `
                  '
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-checkbox">
          <span class="board__unit__component__title">BibCheckbox</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>checkbox</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-checkbox
                    :value="checkboxStatus"
                    name="is-accept-term"
                    label="Checkbox"
                  >
                  </bib-checkbox>
                </div>
                <div
                  class="code"
                  v-text="
                    `<bib-checkbox :value='checkboxStatus' label='Checkbox' name='is-accept-term'></bib-checkbox>`
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-checkbox label="default" checked></bib-checkbox>
                  <bib-checkbox
                    label="primary"
                    variant="primary"
                    checked
                  ></bib-checkbox>
                  <bib-checkbox
                    label="success"
                    variant="success"
                    checked
                  ></bib-checkbox>
                  <bib-checkbox
                    label="secondary"
                    variant="secondary"
                    checked
                  ></bib-checkbox>
                  <bib-checkbox
                    label="danger"
                    variant="danger"
                    checked
                  ></bib-checkbox>
                  <bib-checkbox
                    label="warning"
                    variant="warning"
                    checked
                  ></bib-checkbox>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-checkbox label=&quot;default&quot; checked></bib-checkbox>
                    <bib-checkbox label=&quot;primary&quot; variant=&quot;primary&quot; checked></bib-checkbox>
                    <bib-checkbox label=&quot;success&quot; variant=&quot;success&quot; checked></bib-checkbox>
                    <bib-checkbox label=&quot;secondary&quot; variant=&quot;secondary&quot; checked></bib-checkbox>
                    <bib-checkbox label=&quot;danger&quot; variant=&quot;danger&quot; checked></bib-checkbox>
                    <bib-checkbox label=&quot;warning&quot; variant=&quot;warning&quot; checked></bib-checkbox>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>size (lg, md, sm)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-checkbox label="Large" size="lg"></bib-checkbox>
                  <bib-checkbox label="Default" size="md"></bib-checkbox>
                  <bib-checkbox label="Small" size="sm"></bib-checkbox>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-checkbox label=&quot;Large&quot; size=&quot;lg&quot;></bib-checkbox>
                    <bib-checkbox label=&quot;Default&quot; size=&quot;md&quot;></bib-checkbox>
                    <bib-checkbox label=&quot;Small&quot; size=&quot;sm&quot;></bib-checkbox>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>disabled</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-checkbox label="disabled" disabled></bib-checkbox>
                  <bib-checkbox
                    label="disabled"
                    checked
                    disabled
                  ></bib-checkbox>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-checkbox label=&quot;disabled&quot; disabled></bib-checkbox>
                    <bib-checkbox label=&quot;disabled&quot; checked disabled></bib-checkbox>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-radio">
          <span class="board__unit__component__title">BibRadio</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="default"></bib-radio>
                <div
                  class="code"
                  v-text="`<bib-radio label='default'></bib-radio>`"
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="success" variant="success"></bib-radio>
                <div
                  class="code"
                  v-text="
                    `<bib-radio label='success' variant='success'></bib-radio>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="primary" variant="primary"></bib-radio>
                <div
                  class="code"
                  v-text="
                    `<bib-radio label='primary' variant='primary'></bib-radio>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="secondary" variant="secondary"></bib-radio>
                <div
                  class="code"
                  v-text="
                    `<bib-radio label='secondary' variant='secondary'></bib-radio>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="danger" variant="danger"></bib-radio>
                <div
                  class="code"
                  v-text="
                    `<bib-radio label='danger' variant='danger'></bib-radio>`
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="warning" variant="warning"></bib-radio>
                <div
                  class="code"
                  v-text="
                    `<bib-radio label='warning' variant='warning'></bib-radio>`
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>size (lg, md, sm)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="large" size="lg"></bib-radio>
                <div
                  class="code"
                  v-text="`<bib-radio label='large' size='lg'></bib-radio>`"
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="default" size="md"></bib-radio>
                <div
                  class="code"
                  v-text="`<bib-radio label='default' size='md'></bib-radio>`"
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="small" size="sm"></bib-radio>
                <div
                  class="code"
                  v-text="`<bib-radio label='small' size='sm'></bib-radio>`"
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>disabled (true, false)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="diabled" disabled></bib-radio>
                <div
                  class="code"
                  v-text="`<bib-radio label='diabled' disabled></bib-radio>`"
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <bib-radio label="diabled" checked disabled></bib-radio>
                <div
                  class="code"
                  v-text="
                    `<bib-radio label='diabled' checked disabled></bib-radio>`
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-switch">
          <span class="board__unit__component__title">BibSwitch</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>checked (true, false)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-switch :checked="true">Apple</bib-switch>
                  <br /><br />
                  <bib-switch :checked="false">Peach</bib-switch>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-switch :checked=&quot;true&quot;>Apple</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;false&quot;>Peach</bib-switch>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>size (lg, md, sm)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-switch :checked="false" size="lg">Large</bib-switch>
                  <br /><br />
                  <bib-switch :checked="false" size="md">Default</bib-switch>
                  <br /><br />
                  <bib-switch :checked="false" size="sm">Small</bib-switch>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-switch :checked=&quot;false&quot; size=&quot;lg&quot;>Large</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;false&quot; size=&quot;md&quot;>Default</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;false&quot; size=&quot;sm&quot;>Small</bib-switch>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant (success, danger, warning, primary)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-switch :checked="true">Success (default)</bib-switch>
                  <br /><br />
                  <bib-switch :checked="true" variant="danger"
                    >Danger</bib-switch
                  >
                  <br /><br />
                  <bib-switch :checked="true" variant="warning"
                    >Warning</bib-switch
                  >
                  <br /><br />
                  <bib-switch :checked="true" variant="primary"
                    >Primary</bib-switch
                  >
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-switch :checked=&quot;true&quot;>Success (default)</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;true&quot; variant=&quot;danger&quot;>Danger</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;true&quot; variant=&quot;warning&quot;>Warning</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;true&quot; variant=&quot;primary&quot;>Primary</bib-switch>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>disabled (true, false)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-switch :checked="false" disabled>Disabled</bib-switch>
                  <br /><br />
                  <bib-switch :checked="true" disabled>Disabled</bib-switch>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-switch :checked=&quot;false&quot; disabled>Disabled</bib-switch>
                    <br/><br/>
                    <bib-switch :checked=&quot;true&quot; disabled>Disabled</bib-switch>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-avatar">
          <span class="board__unit__component__title"> BibAvatar </span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>src</strong> (default=null)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar></bib-avatar>
                  <bib-avatar :src="avatarImg"></bib-avatar>
                  <bib-avatar
                    src="https://placekitten.com/300/300"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot;></bib-avatar>
                    <bib-avatar src=&quot;https://placekitten.com/300/300&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>size</strong> (default="2rem")</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar :src="avatarImg" size="1.5rem"></bib-avatar>
                  <bib-avatar :src="avatarImg"></bib-avatar>
                  <bib-avatar :src="avatarImg" size="2.5rem"></bib-avatar>
                  <bib-avatar :src="avatarImg" size="4rem"></bib-avatar>
                  <bib-avatar :src="avatarImg" size="72px"></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar :src=&quot;avatarImg&quot; size=&quot;1.5rem&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; size=&quot;2.5rem&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; size=&quot;4rem&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; size=&quot;72px&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span
              ><strong>shape</strong> (default=circle, rounded, square)</span
            >
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar :src="avatarImg" shape="rounded"></bib-avatar>
                  <bib-avatar :src="avatarImg"></bib-avatar>
                  <bib-avatar :src="avatarImg" shape="square"></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar src=&quot;/img/avatar.png&quot; shape=&quot;rounded&quot;></bib-avatar>
                    <bib-avatar src=&quot;/img/avatar.png&quot;></bib-avatar>
                    <bib-avatar src=&quot;/img/avatar.png&quot; shape=&quot;square&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>text</strong> (default=null)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar text="BG"></bib-avatar>
                  <bib-avatar text="b" shape="rounded"></bib-avatar>
                  <bib-avatar text="Wu" size="3rem"></bib-avatar>
                  <bib-avatar
                    text="Jian"
                    size="4rem"
                    shape="rounded"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar text=&quot;BG&quot;></bib-avatar>
                    <bib-avatar text=&quot;b&quot; shape=&quot;rounded&quot;></bib-avatar>
                    <bib-avatar text=&quot;wu&quot; size=&quot;3rem&quot;></bib-avatar>
                    <bib-avatar text=&quot;Jian&quot; size=&quot;4rem&quot; shape=&quot;rounded&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>variant</strong> {name of color system}</span>
            <br />
            <span><strong>text-variant</strong> (color system name)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar
                    variant="primary"
                    text="BG"
                    text-variant="white"
                  ></bib-avatar>
                  <bib-avatar
                    variant="success"
                    text="BG"
                    text-variant="white"
                    shape="rounded"
                  ></bib-avatar>
                  <bib-avatar
                    variant="warning"
                    text="W"
                    text-variant="dark"
                    size="3rem"
                  ></bib-avatar>
                  <bib-avatar
                    variant="secondary-sub2"
                    text="Jian"
                    text-variant="danger"
                    size="4rem"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar variant=&quot;primary&quot; text=&quot;BG&quot; text-variant=&quot;white&quot;></bib-avatar>
                    <bib-avatar variant=&quot;success&quot; text=&quot;BG&quot; text-variant=&quot;white&quot; shape=&quot;rounded&quot;></bib-avatar>
                    <bib-avatar variant=&quot;warning&quot; text=&quot;W&quot; text-variant=&quot;dark&quot; size=&quot;3rem&quot;></bib-avatar>
                    <bib-avatar variant=&quot;secondary-sub2&quot; text=&quot;Jian&quot; text-variant=&quot;danger&quot; size=&quot;4rem&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>workload</strong> {name of color system}</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar
                    :src="avatarImg"
                    workload="success"
                    size="3rem"
                  ></bib-avatar>
                  <bib-avatar
                    workload="warning"
                    text="BG"
                    size="3rem"
                  ></bib-avatar>
                  <bib-avatar workload="danger" size="3rem"></bib-avatar>
                  <bib-avatar
                    workload="gray1"
                    :src="avatarImg"
                    size="3rem"
                  ></bib-avatar>
                  <bib-avatar
                    workload="orange"
                    size="3rem"
                    shape="rounded"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar :src=&quot;avatarImg&quot; workload=&quot;success&quot; size=&quot;3rem&quot;></bib-avatar>
                    <bib-avatar workload=&quot;warning&quot; text=&quot;BG&quot; size=&quot;3rem&quot;></bib-avatar>
                    <bib-avatar workload=&quot;danger&quot; size=&quot;3rem&quot;></bib-avatar>
                    <bib-avatar workload=&quot;gray1&quot; :src=&quot;avatarImg&quot; size=&quot;3rem&quot;></bib-avatar>
                    <bib-avatar workload=&quot;orange&quot; size=&quot;3rem&quot; shape=&quot;rounded&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>indicator</strong> {name of color system}</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar :src="avatarImg" indicator="danger"></bib-avatar>
                  <bib-avatar :src="avatarImg" indicator="success"></bib-avatar>
                  <bib-avatar :src="avatarImg" indicator="warning"></bib-avatar>
                  <bib-avatar :src="avatarImg" indicator="primary"></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    indicator="secondary"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-avatar :src=&quot;avatarImg&quot; indicator=&quot;danger&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; indicator=&quot;success&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; indicator=&quot;warning&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; indicator=&quot;primary&quot;></bib-avatar>
                    <bib-avatar :src=&quot;avatarImg&quot; indicator=&quot;secondary&quot;></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span
              ><strong>indicator-offset-top</strong> (default="-0.07rem")
              <br /><strong>indicator-offset-right</strong> (default="0.07rem")
            </span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar
                    :src="avatarImg"
                    indicator="danger"
                    indicator-offset="0.1rem"
                  ></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    size="3rem"
                    indicator="success"
                    indicator-offset-top="0.2rem"
                    indicator-offset-right="0.3rem"
                  ></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    size="4rem"
                    indicator="warning"
                    indicator-offset-top="0.3rem"
                    indicator-offset-right="0.35rem"
                  ></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    size="72px"
                    indicator="primary"
                    indicator-offset-top="0.35rem"
                    indicator-offset-right="0.35rem"
                  ></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    shape="rounded"
                    indicator="secondary"
                    indicator-offset-top="-0.15rem"
                    indicator-offset-right="-0.15rem"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                  <bib-avatar :src=&quot;avatarImg&quot; indicator=&quot;danger&quot; indicator-offset=&quot;0.1rem&quot;></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    size=&quot;3rem&quot;
                    indicator=&quot;success&quot;
                    indicator-offset-top=&quot;0.2rem&quot;
                    indicator-offset-right=&quot;0.3rem&quot;
                  ></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    size=&quot;4rem&quot;
                    indicator=&quot;warning&quot;
                    indicator-offset-top=&quot;0.3rem&quot;
                    indicator-offset-right=&quot;0.35rem&quot;
                  ></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    size=&quot;72px&quot;
                    indicator=&quot;primary&quot;
                    indicator-offset-top=&quot;0.35rem&quot;
                    indicator-offset-right=&quot;0.35rem&quot;
                  ></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    shape=&quot;rounded&quot;
                    indicator=&quot;secondary&quot;
                    indicator-offset-top=&quot;-0.15rem&quot;
                    indicator-offset-right=&quot;-0.15rem&quot;
                  ></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span><strong>indicator-size</strong> (default=0.5rem) </span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-avatar text="BG" indicator="primary"></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    size="2.5rem"
                    indicator="success"
                    indicator-size="0.8rem"
                    indicator-offset-top="0.01rem"
                    indicator-offset-right="0.01rem"
                  ></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    size="3rem"
                    indicator="warning"
                    indicator-size="1rem"
                    indicator-offset-top="0.01rem"
                    indicator-offset-right="0.01rem"
                  ></bib-avatar>
                  <bib-avatar
                    :src="avatarImg"
                    size="72px"
                    indicator="danger"
                    indicator-size="1.3rem"
                    indicator-offset-top="0.1rem"
                    indicator-offset-right="0.1rem"
                  ></bib-avatar>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                  <bib-avatar
                    text=&quot;BG&quot;
                    indicator=&quot;primary&quot;
                  ></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    size=&quot;2.5rem&quot;
                    indicator=&quot;success&quot;
                    indicator-size=&quot;0.8rem&quot;
                    indicator-offset-top=&quot;0.01rem&quot;
                    indicator-offset-right=&quot;0.01rem&quot;
                  ></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    size=&quot;3rem&quot;
                    indicator=&quot;warning&quot;
                    indicator-size=&quot;1rem&quot;
                    indicator-offset-top=&quot;0.01rem&quot;
                    indicator-offset-right=&quot;0.01rem&quot;
                  ></bib-avatar>

                  <bib-avatar
                    :src=&quot;avatarImg&quot;
                    size=&quot;72px&quot;
                    indicator=&quot;danger&quot;
                    indicator-size=&quot;1.3rem&quot;
                    indicator-offset-top=&quot;0.1rem&quot;
                    indicator-offset-right=&quot;0.1rem&quot;
                  ></bib-avatar>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-icon">
          <span class="board__unit__component__title"> BibIcon </span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>icon={name}</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-icon icon="heart-like"></bib-icon>
                <div
                  class="code"
                  v-text="`<bib-icon icon=&quot;heart-like&quot;></bib-icon>`"
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant={name of color system}</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-icon icon="heart-like" variant="primary"></bib-icon>
                  <bib-icon icon="heart-like" variant="success"></bib-icon>
                  <bib-icon icon="heart-like" variant="danger"></bib-icon>
                  <bib-icon icon="heart-like" variant="warning"></bib-icon>
                  <bib-icon icon="heart-like" variant="secondary"></bib-icon>
                  <bib-icon icon="heart-like" variant="black"></bib-icon>
                  <bib-icon icon="heart-like" variant="white"></bib-icon>
                  <bib-icon icon="heart-like" variant="gray"></bib-icon>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;primary&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;success&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;danger&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;warning&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;secondary&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;black&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;white&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; variant=&quot;gray&quot;></bib-icon>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>scale (default: 1)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-icon icon="heart-like" :scale="0.8"></bib-icon>
                  <bib-icon icon="heart-like" :scale="1"></bib-icon>
                  <bib-icon icon="heart-like" :scale="1.5"></bib-icon>
                  <bib-icon icon="heart-like" :scale="2"></bib-icon>
                  <bib-icon icon="heart-like" :scale="3"></bib-icon>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-icon icon=&quot;heart-like&quot; :scale=&quot;0.8&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; :scale=&quot;1&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; :scale=&quot;1.5&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; :scale=&quot;2&quot;></bib-icon>
                    <bib-icon icon=&quot;heart-like&quot; :scale=&quot;3&quot;></bib-icon>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span
              >all icons (old)
              <br />
              (variant="success", :scale="1.5")
            </span>
            <div class="box">
              <div class="d-flex" style="flex-wrap: wrap">
                <div class="m-1 text-center">
                  <bib-icon
                    icon="sort"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">sort</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="group"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">group</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="face-success"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">face-success</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="face-danger"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1 text-center">face-danger</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="tick"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">tick</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="kanban"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">kanban</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="list"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">list</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="elipsis"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">elipsis</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="heart"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">heart</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="comment"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">comment</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="download"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">download</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="share"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">share</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="full-screen"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">full-screen</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="arrow-down"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">arrow-down</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="previous"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">previous</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="next"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">next</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="file"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">file</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="help"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">help</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="notification"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">notification</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="plus"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">plus</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="trash"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">trash</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="close"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">close</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="reply"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">reply</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="attachment-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">attachment-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon icon="date" class="m-auto"></bib-icon>
                  <div class="mt-1">date</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="send"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">send</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="filter"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">filter</div>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span
              >all icons (new)
              <br />
              (variant="success", :scale="1.5")
            </span>
            <div class="box">
              <div class="d-flex" style="flex-wrap: wrap">
                <div class="m-1 text-center">
                  <bib-icon
                    icon="add"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">add</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="heart-like"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">heart-like</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="heart-like-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">heart-like-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="comment-forum"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">comment-forum</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="expand-fullscreen"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">expand-fullscreen</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="share-arrow"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">share-arrow</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="comment-blank"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">comment-blank</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="align-bottom"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">align-bottom</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="thumbs-up"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">thumbs-up</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="horizontal-dots"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">horizontal-dots</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="trash"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">trash</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="close"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">close</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="attachment"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">attachment</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="swap-vertical"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">swap-vertical</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="filter-horizontal"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">filter-horizontal</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="group"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">group</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="file-text"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">file-text</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="file-text-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">file-text-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder-add"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder-add</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder-minus"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder-minus</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder-add-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder-add-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="folder-minus-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">folder-minus-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="arrowhead-right"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">arrowhead-right</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="arrowhead-left"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">arrowhead-left</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="arrowhead-down"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">arrowhead-down</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="arrowhead-up"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">arrowhead-up</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="layers"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">layers</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="home"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">home</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="nodes"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">nodes</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="signature"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">signature</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="files"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">files</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="awesome-file"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">awesome-file</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="calendar"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">calendar</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="file-multiple"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">file-multiple</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="domain"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">domain</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="mail-new"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">mail-new</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="upload"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">upload</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="filter-list"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">filter-list</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="copy-file"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">copy-file</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="user-group"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">user-group</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="check-circle"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">check-circle</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="time"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">time</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="user-org-chart"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">user-org-chart</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="pinterest"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">pinterest</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="more-vertical"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">more-vertical</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="notification"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">notification</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="notification-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">notification-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="apps-large"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">apps-large</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="apps-large-solid"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">apps-large-solid</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="list"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">list</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="search"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">search</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="long-arrow-up"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">long-arrow-up</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="long-arrow-down"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">long-arrow-down</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="warning"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">warning</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="user-add"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">user-add</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="pencil"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">pencil</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="transfer"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">transfer</div>
                </div>
                <div class="m-1 text-center">
                  <bib-icon
                    icon="duplicate"
                    :scale="1.5"
                    variant="success"
                    class="m-auto"
                  ></bib-icon>
                  <div class="mt-1">duplicate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="board__unit">
        <span class="board__unit__title" id="molecules"> Molecules </span>

        <div class="board__unit__component" id="bib-checkbox-group">
          <span class="board__unit__component__title">CheckboxGroup</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>inline checkboxes (default)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-checkbox-group
                    v-model="selected_CheckboxGroup"
                    :options="options_CheckboxGroup"
                    name="fruit-group"
                  >
                  </bib-checkbox-group>
                  selected: <strong> {{ selected_CheckboxGroup }} </strong>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-checkbox-group
                      v-model=&quot;selected&quot;
                      :options=&quot;options&quot;
                      name=&quot;fruit-group&quot;
                    >
                    </bib-checkbox-group>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>stacked checkboxes</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-checkbox-group
                  v-model="selected_CheckboxGroup"
                  :options="options_CheckboxGroup"
                  name="fruit-group"
                  @change="handleChange_CheckboxGroup"
                  stacked
                >
                </bib-checkbox-group>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-checkbox-group
                      v-model=&quot;selected&quot;
                      :options=&quot;options&quot;
                      name=&quot;fruit-group&quot;
                      @change=&quot;handleChange&quot;
                      stacked
                    >
                    </bib-checkbox-group>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span></span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <div v-highlight class="highlight-code">
                  <pre class="language-javascript">
                    <code>
                      export default {
                        data() {
                          return {
                            selected: ['apple'],
                            options: [
                              { label: "Orange", value: "orange" },
                              { label: "Apple", value: "apple" },
                              { label: "Grape", value: "grape" },
                            ]
                          }
                        },
                        methods: {
                          handleChange() {
                            console.log(this.selected);
                          }
                        }
                      }
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-radio-group">
          <span class="board__unit__component__title">RadioGroup</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>stacked (yes, no)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-radio-group
                    v-model="selected_RadioGroup"
                    :options="options_RadioGroup"
                    name="radio-group"
                    @change="handleChange_RadioGroup"
                  >
                  </bib-radio-group>
                  selected: <strong> {{ selected_RadioGroup }} </strong>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-radio-group
                      v-model=&quot;selected&quot;
                      :options=&quot;options&quot;
                      name=&quot;radio-group&quot;
                      @change=&quot;handleChange&quot;
                    >
                  `
                  "
                ></div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-radio-group
                    v-model="selected_RadioGroup_Stacked"
                    :options="options_RadioGroup_Stacked"
                    name="radio-group-stacked"
                    stacked
                  >
                  </bib-radio-group>
                </div>
                <div
                  class="code"
                  v-text="
                    `
                    <bib-radio-group
                      v-model=&quot;selected&quot;
                      :options=&quot;options&quot;
                      name=&quot;radio-group-stacked&quot;
                      stacked
                    >
                    </bib-radio-group>
                  `
                  "
                ></div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span></span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <div v-highlight class="highlight-code">
                  <pre class="language-javascript">
                    <code>
                      export default {
                        data() {
                          return {
                            selected: "forth",
                            options: [
                              { label: "First Radio", value: "first", variant: 'success' },
                              { label: "Second Radio", value: "second", variant: 'secondary' },
                              { label: "Third Radio", value: "third", variant: 'danger' },
                              { label: "Forth Radio", value: "forth", size: 'lg' },
                            ]
                          }
                        },
                        methods: {
                          handleChange() {
                            console.log(this.selected);
                          }
                        }
                      }
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-detail-collapse">
          <span class="board__unit__component__title">BibDetailsCollapse</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>details collapse component</span>
            <div class="box">
              <div class="item" v-rowby="'75.25'">
                <div>
                 <bib-detail-collapse label="Label" open>
                   <template v-slot:content>
                       <div v-rowby="'75.25'">
                         <div class="p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta repellendus recusandae possimus illum quod nostrum eum aliquid iusto nesciunt, atque commodi consectetur, dolore veniam excepturi delectus reiciendis, officiis ad.</div>
                       </div>
                     </template>
                 </bib-detail-collapse>
                </div>
                <div></div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-detail-collapse label="Label" open>
                        <template v-slot:content>
                            <div v-rowby="100">
                              <div class="p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta repellendus recusandae possimus illum quod nostrum eum aliquid iusto nesciunt, atque commodi consectetur, dolore veniam excepturi delectus reiciendis, officiis ad.</div>
                            </div>
                          </template>
                      </bib-detail-collapse>
                    `'
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>variant</span>
            <div class="box">
              <div class="item" v-rowby="'75.25'">
                <div>
                 <bib-detail-collapse label="Section" variant="orange">
                   <template v-slot:content>
                       <div class="pl-1 pr-1">
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta repellendus recusandae possimus illum quod nostrum eum aliquid iusto nesciunt, atque commodi consectetur, dolore veniam excepturi delectus reiciendis, officiis ad.</p>
                       </div>
                     </template>
                 </bib-detail-collapse>
                </div>
                <div></div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-detail-collapse label="Section" variant="orange">
                        <template v-slot:content>
                            <div class="pl-1 pr-1">
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta repellendus recusandae possimus illum quod nostrum eum aliquid iusto nesciunt, atque commodi consectetur, dolore veniam excepturi delectus reiciendis, officiis ad.</p>
                            </div>
                          </template>
                      </bib-detail-collapse>
                    `'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-file">
          <span class="board__unit__component__title">BibFile</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>file component</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-file :property="fileProperties[0]"></bib-file>
                  <br/>
                  <bib-file :property="fileProperties[0]" :tags="fileTags"></bib-file>
                  <br/>
                  <bib-file
                    :property="fileProperties[0]"
                    :tags="fileTags"
                    :favorite="isFileFavorite"
                    @favorite-file="handleFileFavorite"
                  ></bib-file>
                </div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-file :property="property" icon="heart-like"></bib-file>
                      <bib-file :property="property" :tags="fileTags"></bib-file>
                      <bib-file
                        :property="property"
                        :tags="fileTags"
                        :favorite="isFileFavorite"
                        @favorite-file="handleFileFavorite"
                      ></bib-file>
                    `'
                  ></div>
                  <div class="item">
                      <div></div>
                      <div v-highlight class="highlight-code">
                        <pre class="language-javascript">
                          <code>
                            export default {
                              data() {
                                return {
                                  property: {
                                    name: "File Name",
                                    colorLabel: "secondary-sub2",
                                    preview: "https://loremflickr.com/640/360",
                                    type: "Image",
                                    size: "234",
                                  },
                                  fileTags: ['free', 'new', 'updated', 'featured', 'invited'],
                                  isFileFavorite: false
                                }
                              },
                              methods: {
                                handleFileFavorite(value) {
                                  console.log(value)
                                  this.isFileFavorite = value
                                }
                              }
                            }
                          </code>
                        </pre>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-app-switcher">
          <span class="board__unit__component__title">BibAppSwitcher</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>app switcher component</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-app-switcher
                  :menuItems="appSwitcherMenu"
                ></bib-app-switcher>
                <div>
                  <div
                    class="code"
                    v-text="
                      '<bib-app-switcher :menuItems=`appItems`></bib-app-switcher>'
                    "
                  ></div>
                  <div class="item">
                    <div></div>
                    <div v-highlight class="highlight-code">
                      <pre class="language-javascript">
                    <code>
                      export default {
                        data() {
                          return {
                            appItems: [
                              { img: "Layers", color: "primary", active: true, text: "Templates", href : '#' },
                              { img: "Files", color: "success-sub1", text: "Files", href : '#' },
                              { img: "Signature", color: "orange", text: "eSign", href : '#' },
                              { img: "Tick", color: "primary", text: "Project", href : '#'},
                              { img: "CommentForum", color: "purple", text: "Chat", href : '#'},
                            ],
                          }
                        },
                      }
                    </code>
                  </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-folder">
          <span class="board__unit__component__title">BibFolder</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>Folder component</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div
                  class="d-flex p-1 folder border-secondary-sub2 shape-rounded"
                >
                  <bib-icon icon="folder" :scale="1.25"></bib-icon>
                  <span class="pl-1 text-bold">{{ folder.name }}</span>
                </div>
                <div
                  class="code"
                  v-text="
                    '<div class=`d-flex p-1 folder border-secondary-sub2 shape-rounded`>\n' +
                    '\t<bib-icon icon=`folder` :scale=`1.25`></bib-icon>\n' +
                    '\t<span class=`pl-1 text-bold`>{{ folder.name }}</span>\n</div>\n'
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-tabs">
          <span class="board__unit__component__title">BibTabs</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>tabs</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <div>
                  <bib-tabs :tabs="bibTabs" :value="activeTab" @change="handleChange_Tabs"></bib-tabs>
                  <div class="p-1">
                    <div v-if="activeTab == bibTabs[0].value">
                      Overview content
                    </div>
                    <div v-if="activeTab == bibTabs[1].value">
                      Team content
                    </div>
                    <div v-if="activeTab == bibTabs[2].value">
                      Tasks content
                    </div>
                    <div v-if="activeTab == bibTabs[3].value">
                      Profile content
                    </div>
                    <div v-if="activeTab == bibTabs[4].value">
                      Disabled content
                    </div>
                  </div>
                </div>
                <div></div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-tabs :tabs="bibTabs" :value="activeTab" @change="handleChange_Tabs"></bib-tabs>
                      <div class="p-1">
                        <div v-if="activeTab == bibTabs[0].value">
                          Overview content
                        </div>
                        <div v-if="activeTab == bibTabs[1].value">
                          Team content
                        </div>
                        <div v-if="activeTab == bibTabs[2].value">
                          Tasks content
                        </div>
                        <div v-if="activeTab == bibTabs[3].value">
                          Profile content
                        </div>
                        <div v-if="activeTab == bibTabs[4].value">
                          Disabled content
                        </div>
                      </div>
                    `'
                  ></div>
                  <div class="item">
                      <div></div>
                      <div v-highlight class="highlight-code">
                        <pre class="language-javascript">
                          <code>
                            export default {
                              data() {
                                return {
                                  bibTabs: [
                                    {
                                      title: "Overview",
                                      value: "overview",
                                    },
                                    {
                                      title: "Team",
                                      value: "team",
                                    },
                                    {
                                      title: "Tasks",
                                      value: "tasks",
                                    },
                                    {
                                      title: "Profile",
                                      value: "profile",
                                    },
                                    {
                                      title: "Disabled",
                                      value: "disabled",
                                      disabled: true,
                                    },
                                  ],
                                  activeTab: "overview",
                                }
                              },
                              methods: {
                                handleChange_Tabs(tab) {
                                  this.activeTab = tab.value
                                }
                              }
                            }
                          </code>
                        </pre>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-modal-wrapper">
          <span class="board__unit__component__title">BibModalWrapper</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>modal</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button variant="primary" label="Modal 1" @click="modal1Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal1Opened" title="" @close="modal1Opened = false">
                    <template slot="content">
                      <div class="text-center p-2">
                        <p class="font-w-600"> Are you sure you want to cancel? </p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="d-flex">
                        <bib-button label="Delete" variant="danger" class="w-100 mr-1" pill></bib-button>
                        <bib-button label="Save as Draft" variant="success" class="w-100" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>

                  <bib-button variant="primary" label="Modal 2" @click="modal2Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal2Opened" title="" @close="modal2Opened = false">
                    <template slot="content">
                      <div class="text-center p-2">
                        <p class="font-w-600"> The envelope has been sent to 4 participants </p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="text-center">
                        <bib-button label="Track Progress" variant="success" class="w-50" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>
                </div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-button variant="primary" label="Modal 1" @click="modal1Opened = true"></bib-button>
                      <bib-modal-wrapper v-if="modal1Opened" title="" @close="modal1Opened = false">
                        <template slot="content">
                          <div class="text-center p-2">
                            <p class="font-w-600"> Are you sure you want to cancel? </p>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="d-flex">
                            <bib-button label="Delete" variant="danger" class="w-100 mr-1" pill></bib-button>
                            <bib-button label="Save as Draft" variant="success" class="w-100" pill></bib-button>
                          </div>
                        </template>
                      </bib-modal-wrapper>

                      <bib-button variant="primary" label="Modal 2" @click="modal2Opened = true"></bib-button>
                      <bib-modal-wrapper v-if="modal2Opened" title="" @close="modal2Opened = false">
                        <template slot="content">
                          <div class="text-center p-2">
                            <p class="font-w-600"> The envelope has been sent to 4 participants </p>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="text-center">
                            <bib-button label="Track Progress" variant="success" class="w-50" pill></bib-button>
                          </div>
                        </template>
                      </bib-modal-wrapper>
                    `'
                  >
                  </div>
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button variant="primary" label="Modal 3" @click="modal3Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal3Opened" title="Create file" @close="modal3Opened = false">
                    <template slot="content">
                      <div>
                        <bib-input type="text" placeholder="Enter file name..."></bib-input>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="d-flex">
                        <bib-button label="Cancel" variant="light" pill></bib-button>
                        <bib-button label="Create" variant="success" class="ml-auto" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>
                </div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-button variant="primary" label="Modal 3" @click="modal3Opened = true"></bib-button>
                      <bib-modal-wrapper v-if="modal3Opened" title="Create file" @close="modal3Opened = false">
                        <template slot="content">
                          <div>
                            <bib-input type="text" placeholder="Enter file name..."></bib-input>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="d-flex">
                            <bib-button label="Cancel" variant="light" pill></bib-button>
                            <bib-button label="Create" variant="success" class="ml-auto" pill></bib-button>
                          </div>
                        </template>
                      </bib-modal-wrapper>
                    `'
                  >
                  </div>
                </div>
              </div>
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button variant="primary" label="Modal 4" @click="modal4Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal4Opened" title="Create file" @close="modal4Opened = false">
                    <template slot="content">
                      <div>
                        <bib-input
                          type="file"
                          ref="files"
                          @files-dropped="handleChange__FileInput"
                          variant="accepted"
                          iconLeft="upload"
                          placeholder="Drop file here or click to upload"
                        ></bib-input>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="d-flex">
                        <bib-button label="Cancel" variant="light" pill></bib-button>
                        <bib-button label="Upload" variant="success" class="ml-auto" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>
                </div>
                <div>
                  <div
                    class="code"
                    v-text='`
                      <bib-button variant="primary" label="Modal 4" @click="modal4Opened = true"></bib-button>
                      <bib-modal-wrapper v-if="modal4Opened" title="Create file" @close="modal4Opened = false">
                        <template slot="content">
                          <div>
                            <bib-input
                              type="file"
                              ref="files"
                              @files-dropped="handleChange__FileInput"
                              variant="accepted"
                              iconLeft="upload"
                              placeholder="Drop file here or click to upload"
                            ></bib-input>
                          </div>
                        </template>
                        <template slot="footer">
                          <div class="d-flex">
                            <bib-button label="Cancel" variant="light" pill></bib-button>
                            <bib-button label="Upload" variant="success" class="ml-auto" pill></bib-button>
                          </div>
                        </template>
                      </bib-modal-wrapper>
                    `'
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>size (lg, md, sm)</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button variant="primary" label="lg Modal" @click="modal5Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal5Opened" size="lg" @close="modal5Opened = false">
                    <template slot="content">
                      <div class="text-center">
                        <p class="font-w-600"> Large Modal </p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="text-center">
                        <bib-button label="OK" variant="success" class="w-50" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>

                  <bib-button variant="primary" label="sm Modal" @click="modal6Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal6Opened" size="sm" @close="modal6Opened = false">
                    <template slot="content">
                      <div class="text-center">
                        <p class="font-w-600"> Small Modal </p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="text-center">
                        <bib-button label="OK" variant="success" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>
                </div>
                <div
                    class="code"
                    v-text='`
                    <bib-button variant="primary" label="lg Modal" @click="modal5Opened = true"></bib-button>
                    <bib-modal-wrapper v-if="modal5Opened" size="lg" @close="modal5Opened = false">
                      <template slot="content">
                        <div class="text-center">
                          <p class="font-w-600"> Large Modal </p>
                        </div>
                      </template>
                      <template slot="footer">
                        <div class="text-center">
                          <bib-button label="OK" variant="success" class="w-50" pill></bib-button>
                        </div>
                      </template>
                    </bib-modal-wrapper>

                    <bib-button variant="primary" label="sm Modal" @click="modal6Opened = true"></bib-button>
                    <bib-modal-wrapper v-if="modal6Opened" size="sm" @close="modal6Opened = false">
                      <template slot="content">
                        <div class="text-center">
                          <p class="font-w-600"> Small Modal </p>
                        </div>
                      </template>
                      <template slot="footer">
                        <div class="text-center">
                          <bib-button label="OK" variant="success" pill></bib-button>
                        </div>
                      </template>
                    </bib-modal-wrapper>
                    `'>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>modal with header icons</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button variant="primary" label="Modal with header" @click="modal7Opened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal7Opened" title="Title" size="lg" @close="modal7Opened = false">
                    <template slot="header">
                      <bib-icon variant="gray5" class="cursor-pointer" :scale="1.2" icon="comment-forum"></bib-icon>
                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="attachment-solid"></bib-icon>
                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="share"></bib-icon>
                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="trash"></bib-icon>
                    </template>
                    <template slot="content">
                      <div class="text-center mb-2 mt-2">
                        <p class="font-w-600"> Modal with header </p>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="text-center d-flex">
                        <bib-button label="Button" variant="light" size="lg" class="w-100 mr-1" pill></bib-button>
                        <bib-button label="Button" variant="success" size="lg" class="w-100" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>
                </div>
                <div
                    class="code"
                    v-text='`
                    <bib-button variant="primary" label="Modal with header" @click="modal7Opened = true"></bib-button>
                    <bib-modal-wrapper v-if="modal7Opened" title="Title" size="lg" @close="modal7Opened = false">
                      <template slot="header">
                        <bib-icon variant="gray5" class="cursor-pointer" :scale="1.2" icon="comment-forum"></bib-icon>
                        <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="attachment-solid"></bib-icon>
                        <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="share"></bib-icon>
                        <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="trash"></bib-icon>
                      </template>
                      <template slot="content">
                        <div class="text-center mb-2 mt-2">
                          <p class="font-w-600"> Modal with header </p>
                        </div>
                      </template>
                      <template slot="footer">
                        <div class="text-center d-flex">
                          <bib-button label="Button" variant="light" size="lg" class="w-100 mr-1" pill></bib-button>
                          <bib-button label="Button" variant="success" size="lg" class="w-100" pill></bib-button>
                        </div>
                      </template>
                    </bib-modal-wrapper>
                    `'>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span></span>
            <div class="box">
              <div class="item">
                  <div></div>
                  <div v-highlight class="highlight-code">
                    <pre class="language-javascript">
                      <code>
                        export default {
                          data() {
                            return {
                              modal1Opened: false,
                              modal2Opened: false,
                              modal3Opened: false,
                              modal4Opened: false,
                              modal5Opened: false,
                              modal6Opened: false
                            }
                          },
                          methods: {
                            handleChange__FileInput(files){
                              console.log(files)
                            }
                          }
                        }
                      </code>
                    </pre>
                  </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>sample modal</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-button variant="primary" label="Example" @click="modal_sample.modalOpened = true"></bib-button>
                  <bib-modal-wrapper v-if="modal_sample.modalOpened" size="lg" @close="modal_sample.modalOpened = false">
                    <template slot="header">
                      <bib-icon variant="gray5" class="cursor-pointer" :scale="1.2" icon="comment-forum"></bib-icon>
                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="attachment-solid"></bib-icon>
                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="share"></bib-icon>
                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="trash"></bib-icon>
                    </template>
                    <template slot="content">
                      <div class="mb-2 mt-2">
                        <div class="d-flex align-center mb-1">
                          <bib-avatar size="4.5rem"></bib-avatar>
                          <h3 class="ml-2"> Bruno Goulet </h3>
                        </div>
                        <bib-tabs :tabs="modal_sample.tabs" :value="modal_sample.activeTab" @change="handleChange_SampleModalTabs"></bib-tabs>
                        <div class="p-1">
                          <div v-if="modal_sample.activeTab == modal_sample.tabs[0].value">
                            <div class="d-flex">
                              <bib-input
                                type="text"
                                v-model="modal_sample.email"
                                placeholder="Type your email"
                                label="Email"
                                required
                                class="w-50 mr-05"
                              ></bib-input>
                              <bib-input
                                type="text"
                                v-model="modal_sample.number"
                                placeholder="Type your number"
                                label="Telephone"
                                required
                                class="w-50 ml-05"
                              ></bib-input>
                            </div>
                            <div class="d-flex">
                              <bib-input
                                type="password"
                                v-model="modal_sample.password"
                                placeholder="Type password..."
                                label="Password"
                                required
                                class="w-50 mr-05"
                              ></bib-input>
                              <bib-input
                                type="password"
                                v-model="modal_sample.confirm_password"
                                placeholder="Confirm password..."
                                label="Confirm Password"
                                required
                                class="w-50 ml-05"
                              ></bib-input>
                            </div>
                            <div class="mt-1">
                              <label class="text-gray6"> 2-step verification </label>
                              <div class="mt-05">
                                <bib-switch :checked="false">Click here to activate 2-step verification</bib-switch>
                              </div>
                            </div>
                            <div class="mt-1">
                              <label class="text-gray6"> Security questions </label>
                              <div class="mt-05">
                                <bib-switch :checked="false">Click here to add security questions</bib-switch>
                              </div>
                            </div>
                            <div class="d-flex mt-1">
                              <bib-input
                                type="text"
                                v-model="modal_sample.lang"
                                placeholder="Language"
                                label="Language"
                                required
                                class="w-50 mr-05"
                              ></bib-input>
                              <bib-input
                                type="text"
                                v-model="modal_sample.timezone"
                                placeholder="Time zone"
                                label="Time Zone"
                                required
                                class="w-50 ml-05"
                              ></bib-input>
                            </div>
                          </div>
                          <div v-if="modal_sample.activeTab == modal_sample.tabs[1].value">
                            Profile content
                          </div>
                          <div v-if="modal_sample.activeTab == modal_sample.tabs[2].value">
                            Payment content
                          </div>
                          <div v-if="modal_sample.activeTab == modal_sample.tabs[3].value">
                            Subscriptions content
                          </div>
                          <div v-if="modal_sample.activeTab == modal_sample.tabs[4].value">
                            Notifications content
                          </div>
                        </div>
                      </div>
                    </template>
                    <template slot="footer">
                      <div class="text-center d-flex">
                        <bib-button label="Button" variant="light" size="lg" class="w-100 mr-1" pill></bib-button>
                        <bib-button label="Button" variant="success" size="lg" class="w-100" pill></bib-button>
                      </div>
                    </template>
                  </bib-modal-wrapper>
                </div>
                <div></div>
                <div>
                  <bib-detail-collapse label="Code">
                      <template v-slot:content>
                          <div v-rowby="100">
                            <div class="">
                              <div
                                  class="code"
                                  v-text='`
                                  <bib-button variant="primary" label="Example" @click="modal_sample.modalOpened = true"></bib-button>
                                  <bib-modal-wrapper v-if="modal_sample.modalOpened" size="lg" @close="modal_sample.modalOpened = false">
                                    <template slot="header">
                                      <bib-icon variant="gray5" class="cursor-pointer" :scale="1.2" icon="comment-forum"></bib-icon>
                                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="attachment-solid"></bib-icon>
                                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="share"></bib-icon>
                                      <bib-icon variant="gray5" class="cursor-pointer ml-05" :scale="1.2" icon="trash"></bib-icon>
                                    </template>
                                    <template slot="content">
                                      <div class="mb-2 mt-2">
                                        <div class="d-flex align-center mb-1">
                                          <bib-avatar size="4.5rem"></bib-avatar>
                                          <h3 class="ml-2"> Bruno Goulet </h3>
                                        </div>
                                        <bib-tabs :tabs="modal_sample.tabs" :value="modal_sample.activeTab" @change="handleChange_SampleModalTabs"></bib-tabs>
                                        <div class="p-1">
                                          <div v-if="modal_sample.activeTab == modal_sample.tabs[0].value">
                                            <div class="d-flex">
                                              <bib-input
                                                type="text"
                                                v-model="modal_sample.email"
                                                placeholder="Type your email"
                                                label="Email"
                                                required
                                                class="w-50 mr-05"
                                              ></bib-input>
                                              <bib-input
                                                type="text"
                                                v-model="modal_sample.number"
                                                placeholder="Type your number"
                                                label="Telephone"
                                                required
                                                class="w-50 ml-05"
                                              ></bib-input>
                                            </div>
                                            <div class="d-flex">
                                              <bib-input
                                                type="password"
                                                v-model="modal_sample.password"
                                                placeholder="Type password..."
                                                label="Password"
                                                required
                                                class="w-50 mr-05"
                                              ></bib-input>
                                              <bib-input
                                                type="password"
                                                v-model="modal_sample.confirm_password"
                                                placeholder="Confirm password..."
                                                label="Confirm Password"
                                                required
                                                class="w-50 ml-05"
                                              ></bib-input>
                                            </div>
                                            <div class="mt-1">
                                              <label class="text-gray6"> 2-step verification </label>
                                              <div class="mt-05">
                                                <bib-switch :checked="false">Click here to activate 2-step verification</bib-switch>
                                              </div>
                                            </div>
                                            <div class="mt-1">
                                              <label class="text-gray6"> Security questions </label>
                                              <div class="mt-05">
                                                <bib-switch :checked="false">Click here to add security questions</bib-switch>
                                              </div>
                                            </div>
                                            <div class="d-flex mt-1">
                                              <bib-input
                                                type="text"
                                                v-model="modal_sample.language"
                                                placeholder="Language"
                                                label="Language"
                                                required
                                                class="w-50 mr-05"
                                              ></bib-input>
                                              <bib-input
                                                type="text"
                                                v-model="modal_sample.timezone"
                                                placeholder="Time zone"
                                                label="Time Zone"
                                                required
                                                class="w-50 ml-05"
                                              ></bib-input>
                                            </div>
                                          </div>
                                          <div v-if="modal_sample.activeTab == modal_sample.tabs[1].value">
                                            Profile content
                                          </div>
                                          <div v-if="modal_sample.activeTab == modal_sample.tabs[2].value">
                                            Payment content
                                          </div>
                                          <div v-if="modal_sample.activeTab == modal_sample.tabs[3].value">
                                            Subscriptions content
                                          </div>
                                          <div v-if="modal_sample.activeTab == modal_sample.tabs[4].value">
                                            Notifications content
                                          </div>
                                        </div>
                                      </div>
                                    </template>
                                    <template slot="footer">
                                      <div class="text-center d-flex">
                                        <bib-button label="Button" variant="light" size="lg" class="w-100 mr-1" pill></bib-button>
                                        <bib-button label="Button" variant="success" size="lg" class="w-100" pill></bib-button>
                                      </div>
                                    </template>
                                  </bib-modal-wrapper>
                                  `'>
                              </div>
                            </div>
                          </div>
                        </template>
                    </bib-detail-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="board__unit">
        <span class="board__unit__title" id="organims"> Organisms </span>

        <div class="board__unit__component" id="bib-app-wrapper">
          <span class="board__unit__component__title">BibAppWrapper</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>app wrapper component</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <bib-app-wrapper
                  :navigationCollapsed="collapseNavigation"
                  @collapseNavigation="
                    () => {
                      collapseNavigation = !collapseNavigation;
                    }
                  "
                >
                </bib-app-wrapper>
                <div>
                  <div
                    class="code"
                    v-text="
                      `<bib-app-wrapper :navigationCollapsed='collapseNavigation' 
                        @collapseNavigation='() => {collapseNavigation = !collapseNavigation;}'>
                        </bib-app-wrapper>`
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-table">
          <span class="board__unit__component__title">BibTable</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>table component</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <bib-table
                  :fields="tableFields"
                  class="border-gray4 bg-white"
                  :sections="tableSections"
                >
                  <template #cell(name)="data">
                    <div class="d-flex gap-05">
                      <bib-avatar
                        class="mt-auto mb-auto"
                        shape="rounded"
                        :src="data.value.preview"
                        size="1.5rem"
                      >
                      </bib-avatar>
                      <span class="text-dark">
                        {{ data.value.name }}
                      </span>
                    </div>
                  </template>
                  <template #cell(type)="data">
                    <div class="justify-between text-dark">
                      <span>
                        {{
                          data.value.type.charAt(0) +
                          data.value.type.slice(1).toLowerCase()
                        }}
                        ({{ data.value.extension.toUpperCase() }})
                      </span>
                    </div>
                  </template>
                  <template #cell_action="data">
                    <bib-button pop="elipsis">
                        <template v-slot:menu>
                            <div class="list">
                                <span class="list__item" @click="handleAction_Table(data)">View profile</span>
                                <span class="list__item">Edit</span>
                                <span class="list__item">Delete</span>
                            </div>
                        </template>
                    </bib-button>
                  </template>
                </bib-table>
                <div></div>
                <div>
                  <div class="code" v-text='`
                    <bib-table
                      :fields="tableFields"
                      class="border-gray4 bg-white"
                      :sections="tableSections"
                    >
                      <template #cell(name)="data">
                        <div class="d-flex gap-05">
                          <bib-avatar
                            class="mt-auto mb-auto"
                            shape="rounded"
                            :src="data.value.preview"
                            size="1.5rem"
                          >
                          </bib-avatar>
                          <span class="text-dark">
                            {{ data.value.name }}
                          </span>
                        </div>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>
                            {{
                              data.value.type.charAt(0) +
                              data.value.type.slice(1).toLowerCase()
                            }}
                            ({{ data.value.extension.toUpperCase() }})
                          </span>
                        </div>
                      </template>
                      <template #cell_action="data">
                        <bib-button pop="elipsis">
                            <template v-slot:menu>
                                <div class="list">
                                    <span class="list__item" @click="handleAction_Table(data)">View profile</span>
                                    <span class="list__item">Edit</span>
                                    <span class="list__item">Delete</span>
                                </div>
                            </template>
                        </bib-button>
                      </template>
                    </bib-table>
                  `'>
                  </div>
                  <div class="item">
                    <div></div>
                    <div v-highlight class="highlight-code">
                      <pre class="language-javascript">
                        <code>
                          export default{
                            data(){
                              return{
                                tableFields: [
                                  {
                                    key: "",
                                    label: "#",
                                  },
                                  {
                                    key: "name",
                                    label: "File name",
                                  },
                                  {
                                    key: "type",
                                    label: "File type",
                                  },
                                ],
                                tableSections: [
                                  {
                                    type: "FILE",
                                    name: "Shot#4",
                                    preview: "https://loremflickr.com/640/360",
                                    extension: "png",
                                    __v: 0,
                                    active: false,
                                  },
                                  {
                                    type: "FILE",
                                    name: "Photo 345",
                                    extension: "png",
                                    preview: "https://loremflickr.com/640/360",
                                    __v: 0,
                                    active: false,
                                  },
                                  {
                                    type: "FILE",
                                    name: "Photo 640",
                                    extension: "png",
                                    preview: "https://loremflickr.com/640/360",
                                    __v: 0,
                                    active: false,
                                  },
                                  {
                                    type: "FILE",
                                    name: "Photo 360",
                                    extension: "png",
                                    preview: "https://loremflickr.com/640/360",
                                    __v: 0,
                                    active: false,
                                  },
                                ]
                              },
                              methods: {
                                handleAction_Table(data) {
                                  console.log(data)
                                }
                              }
                            }
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>collapsible table</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <div>
                  <bib-table
                    :fields="tableFields"
                    :sections="tableSections"
                    :collapseObj="{collapsed: false, label: 'Past Due', variant: 'danger'}"
                    class="border-gray4 bg-white"
                  >
                    <template #cell(name)="data">
                      <div class="d-flex gap-05">
                        <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                        <span class="text-dark">{{ data.value.name }}</span>
                      </div>
                    </template>
                    <template #cell(type)="data">
                      <div class="justify-between text-dark">
                        <span>{{data.value.type}}</span>
                      </div>
                    </template>
                  </bib-table>
                </div>
                <div></div>
                <div>
                  <div class="code" v-text='`
                    <bib-table
                      :fields="tableFields"
                      :sections="tableSections"
                      :collapseObj="{collapsed: false, label: &#39;Past Due&#39;, variant: &#39;danger&#39;}"
                      class="border-gray4 bg-white"
                    >
                      <template #cell(name)="data">
                        <div class="d-flex gap-05">
                          <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                          <span class="text-dark">{{ data.value.name }}</span>
                        </div>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>{{data.value.type}}</span>
                        </div>
                      </template>
                    </bib-table>
                  `'>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>multiple collapsible table</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <div>
                  <bib-table
                    :fields="tableFields"
                    :sections="tableSections"
                    :collapseObj="{collapsed: false, label: 'Past Due', variant: 'danger'}"
                    class="border-gray4 bg-white"
                    :style="{ borderBottom: 'none'}"
                  >
                    <template #cell(name)="data">
                      <div class="d-flex gap-05">
                        <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                        <span class="text-dark">{{ data.value.name }}</span>
                      </div>
                    </template>
                    <template #cell(type)="data">
                      <div class="justify-between text-dark">
                        <span>{{data.value.type}}</span>
                      </div>
                    </template>
                  </bib-table>

                  <bib-table
                    :fields="tableFields"
                    :sections="tableSections"
                    :headless="true"
                    :collapseObj="{collapsed: false, label: 'Due Today', variant: 'orange'}"
                    class="border-gray4 bg-white"
                    :style="{ borderBottom: 'none'}"
                  >
                    <template #cell(name)="data">
                      <div class="d-flex gap-05">
                        <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                        <span class="text-dark">{{ data.value.name }}</span>
                      </div>
                    </template>
                    <template #cell(type)="data">
                      <div class="justify-between text-dark">
                        <span>{{data.value.type}}</span>
                      </div>
                    </template>
                  </bib-table>

                  <bib-table
                    :fields="tableFields"
                    :sections="tableSections"
                    :headless="true"
                    :collapseObj="{collapsed: false, label: 'Tomorrow', variant: 'success'}"
                    class="border-gray4 bg-white"
                  >
                    <template #cell(name)="data">
                      <div class="d-flex gap-05">
                        <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                        <span class="text-dark">{{ data.value.name }}</span>
                      </div>
                    </template>
                    <template #cell(type)="data">
                      <div class="justify-between text-dark">
                        <span>{{data.value.type}}</span>
                      </div>
                    </template>
                  </bib-table>
                </div>
                <div></div>
                <div>
                  <div class="code" v-text='`
                    <bib-table
                      :fields="tableFields"
                      :sections="tableSections"
                      :collapseObj="{collapsed: false, label: &#39;Past Due&#39;, variant: &#39;danger&#39;}"
                      class="border-gray4 bg-white"
                      :style="{ borderBottom: &#39;none&#39;}"
                    >
                      <template #cell(name)="data">
                        <div class="d-flex gap-05">
                          <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                          <span class="text-dark">{{ data.value.name }}</span>
                        </div>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>{{data.value.type}}</span>
                        </div>
                      </template>
                    </bib-table>

                    <bib-table
                      :fields="tableFields"
                      :sections="tableSections"
                      :headless="true"
                      :collapseObj="{collapsed: false, label: &#39;Due Today&#39;, variant: &#39;orange&#39;}"
                      class="border-gray4 bg-white"
                      :style="{ borderBottom: &#39;none&#39;}"
                    >
                      <template #cell(name)="data">
                        <div class="d-flex gap-05">
                          <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                          <span class="text-dark">{{ data.value.name }}</span>
                        </div>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>{{data.value.type}}</span>
                        </div>
                      </template>
                    </bib-table>

                    <bib-table
                      :fields="tableFields"
                      :sections="tableSections"
                      :headless="true"
                      :collapseObj="{collapsed: false, label: &#39;Tomorrow&#39;, variant: &#39;success&#39;}"
                      class="border-gray4 bg-white"
                    >
                      <template #cell(name)="data">
                        <div class="d-flex gap-05">
                          <bib-avatar class="mt-auto mb-auto" shape="rounded" :src="data.value.preview" size="1.5rem"></bib-avatar>
                          <span class="text-dark">{{ data.value.name }}</span>
                        </div>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>{{data.value.type}}</span>
                        </div>
                      </template>
                    </bib-table>
                  `'>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>table of dynamic width</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div></div>
                <bib-table
                  :fields="tableFields1"
                  class="border-gray4 bg-white"
                  :sections="tableSections"
                >
                  <template #cell(name)="data">
                    <div class="d-flex gap-05">
                      <bib-avatar
                        class="mt-auto mb-auto"
                        shape="rounded"
                        :src="data.value.preview"
                        size="1.5rem"
                      >
                      </bib-avatar>
                      <span class="text-dark">
                        {{ data.value.name }}
                      </span>
                    </div>
                  </template>
                  <template #cell(type)="data">
                    <div class="justify-between text-dark">
                      <span>
                        {{
                          data.value.type.charAt(0) +
                          data.value.type.slice(1).toLowerCase()
                        }}
                        ({{ data.value.extension.toUpperCase() }})
                      </span>
                    </div>
                  </template>
                </bib-table>
                <div></div>
                <div>
                  <div class="code" v-text='`
                    <bib-table
                      :fields="tableFields"
                      class="border-gray4 bg-white"
                      :sections="tableSections"
                    >
                      <template #cell(name)="data">
                        <div class="d-flex gap-05">
                          <bib-avatar
                            class="mt-auto mb-auto"
                            shape="rounded"
                            :src="data.value.preview"
                            size="1.5rem"
                          >
                          </bib-avatar>
                          <span class="text-dark">
                            {{ data.value.name }}
                          </span>
                        </div>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>
                            {{
                              data.value.type.charAt(0) +
                              data.value.type.slice(1).toLowerCase()
                            }}
                            ({{ data.value.extension.toUpperCase() }})
                          </span>
                        </div>
                      </template>
                    </bib-table>
                  `'>
                  </div>
                  <div class="item">
                    <div></div>
                    <div v-highlight class="highlight-code">
                      <pre class="language-javascript">
                        <code>
                          export default{
                            data(){
                              return{
                                tableFields: [
                                  {
                                    key: "",
                                    label: "#"
                                  },
                                  {
                                    key: "name",
                                    label: "File name (width:75%)",
                                    width: '75%'
                                  },
                                  {
                                    key: "type",
                                    label: "File type",
                                  },
                                ],
                                tableSections: [
                                  {
                                    type: "FILE",
                                    name: "Shot#4",
                                    preview: "https://loremflickr.com/640/360",
                                    extension: "png",
                                    __v: 0,
                                    active: false,
                                  },
                                  {
                                    type: "FILE",
                                    name: "Photo 345",
                                    extension: "png",
                                    preview: "https://loremflickr.com/640/360",
                                    __v: 0,
                                    active: false,
                                  },
                                  {
                                    type: "FILE",
                                    name: "Photo 640",
                                    extension: "png",
                                    preview: "https://loremflickr.com/640/360",
                                    __v: 0,
                                    active: false,
                                  },
                                  {
                                    type: "FILE",
                                    name: "Photo 360",
                                    extension: "png",
                                    preview: "https://loremflickr.com/640/360",
                                    __v: 0,
                                    active: false,
                                  },
                                ]
                              }
                            }
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="board__unit__component" id="bib-app-navigation">
          <span class="board__unit__component__title">BibAppNavigation</span>

          <div class="board__unit__component__content" v-rowby="'25.75'">
            <span>app navigation component</span>
            <div class="box">
              <div class="item" v-rowby="'25.75'">
                <div>
                  <bib-app-navigation
                    :items="navItems"
                    class="bg-dark"
                  ></bib-app-navigation>
                  <small class="pl-1 text-gray6"
                    >Background is transparent.</small
                  >
                </div>
                <div>
                  <div
                    class="code"
                    v-text="
                      `<bib-app-navigation :items='navItems'></bib-app-navigation>`
                    "
                  ></div>
                  <div class="item">
                    <div></div>
                    <div v-highlight class="highlight-code">
                      <pre class="language-javascript">
                    <code>
                      export default {
                        data() {
                          return {
                            navItems: [
                              { label: "My Files", icon: "home", selected: true },
                              { label: "Shared with me", icon: "nodes" },
                              { label: "Favorites", icon: "heart" },
                            ],
                          }
                        },
                      }
                    </code>
                  </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BibButton from "../../bib-shared/components/Atoms/BibButton.vue";
import NavigationSideBar from "./../components/NavigationSideBar.vue";
export default {
  components: { BibButton, NavigationSideBar },
  data() {
    return {
      collapseNavigation: true,
      navItems: [
        { label: "My Files", icon: "home", selected: true },
        { label: "Shared with me", icon: "nodes" },
        { label: "Favorites", icon: "heart" },
      ],
      boardMenu: [
        {
          label: "Home",
          routerLink: "/",
        },
        {
          label: "Color System",
          id: "color-system",
        },
        {
          label: "Atoms",
          id: "atoms",
          subMenu: [
            {
              label: "Button",
              id: "bib-button",
            },
            {
              label: "Dropdown",
              id: "dropdown",
            },
            {
              label: "Popup",
              id: "popup",
            },
            {
              label: "Input",
              id: "bib-input",
            },
            {
              label: "Checkbox",
              id: "bib-checkbox",
            },
            {
              label: "Radio",
              id: "bib-radio",
            },
            {
              label: "Switch",
              id: "bib-switch",
            },
            {
              label: "Avatar",
              id: "bib-avatar",
            },
            {
              label: "Icon",
              id: "bib-icon",
            },
          ],
        },
        {
          label: "Molecules",
          id: "molecules",
          subMenu: [
            {
              label: "Checkbox Group",
              id: "bib-checkbox-group",
            },
            {
              label: "Radio Group",
              id: "bib-radio-group",
            },
            {
              label: "Bib Detail Collapse",
              id: "bib-detail-collapse",
            },
            {
              label: "Bib File",
              id: "bib-file",
            },
            {
              label: "App Switcher",
              id: "bib-app-switcher",
            },
            {
              label: "Bib Folder",
              id: "bib-folder",
            },
            {
              label: "Bib Tabs",
              id: "bib-tabs",
            },
            {
              label: "Bib Modal",
              id: "bib-modal-wrapper",
            },
          ],
        },
        {
          label: "Organims",
          id: "organims",
          subMenu: [
            {
              label: "Bib App Wrapper",
              id: "bib-app-wrapper",
            },
            {
              label: "Bib Table",
              id: "bib-table",
            },
            {
              label: "Bib App Navigation",
              id: "bib-app-navigation",
            },
          ],
        },
      ],
      folder: {
        name: "Folder Name",
      },
      fileProperties: [
        {
          name: "File Name",
          colorLabel: "secondary-sub2",
          preview: "https://loremflickr.com/640/360",
          type: "Image",
          size: "234",
        },
        {
          name: "File Name",
          variant: "gray",
          preview: "",
          type: "Document",
          size: "234",
        },
      ],
      fileTags: ["free", "new", "updated", "featured", "invited"],
      isFileFavorite: false,
      bibTabs: [
        {
          title: "Overview",
          value: "overview",
        },
        {
          title: "Team",
          value: "team",
        },
        {
          title: "Tasks",
          value: "tasks",
        },
        {
          title: "Profile",
          value: "profile",
        },
        {
          title: "Disabled",
          value: "disabled",
          disabled: true,
        },
      ],
      activeTab: "overview",
      bcItems: [
        {
          active: false,
          label: "level 1",
          href: "#",
        },
        {
          active: false,
          label: "level 2",
          href: "#",
        },
        {
          active: true,
          label: "level 3",
          href: "#",
        },
      ],
      ddItems: [
        {
          img: "/img/avatar.png",
          text: "List item 1",
        },
        {
          img: "/img/avatar-2.png",
          text: "List item 2",
        },
        {
          img: "/img/avatar-3.png",
          text: "List item 3",
        },
        {
          img: "/img/avatar-4.png",
          text: "List item 4",
        },
      ],
      menuItems: [
        {
          img: "/img/business.png",
          active: true,
          indicator: true,
        },
        {
          img: "/img/biztree.png",
          active: false,
          indicator: true,
        },
      ],
      appSwitcherMenu: [
        {
          img: "Layers",
          color: "primary",
          active: true,
          text: "Templates",
          href: "#",
        },
        { img: "Files", color: "success-sub1", text: "Files", href: "#" },
        { img: "Signature", color: "orange", text: "eSign", href: "#" },
        { img: "Tick", color: "primary", text: "Project", href: "#" },
        { img: "CommentForum", color: "purple", text: "Chat", href: "#" },
      ],
      /*-------------- input form --------------*/
      form: {
        name: "Jianyu Wu",
        email: "test@gmail.com",
        password: "123456",
        age: 36,
        birthday: "2021-09-22",
        time: "11:56",
        color: "#2ba026",
        profile: "",
        fruit: {
          items: [{
          label: 'Item #02',
          event:"item-event",
          img: ""
        },
        {
          label: 'Item #02',
          event:"item-event",
          img: ""
        },
        {
          label: 'Item #03',
          event:"item-event",
          img: ""
        }],
        }
      },
      fruitOptions: [
        { label: "Please choose one", value: null },
        { label: "Orange", value: "orange" },
        { label: "Apple", value: "apple" },
        { label: "Grape", value: "grape" },
      ],
      avatarImg: "/img/avatar.png",
      /*----- checkbox group / radio group -----*/
      checkboxStatus: "accepted",
      selected_CheckboxGroup: ["apple"],
      options_CheckboxGroup: [
        { label: "Orange", value: "orange" },
        { label: "Apple", value: "apple" },
        { label: "Grape", value: "grape" },
      ],
      selected_RadioGroup: "a",
      options_RadioGroup: [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
        { label: "C", value: "c" },
      ],
      selected_RadioGroup_Stacked: "forth",
      options_RadioGroup_Stacked: [
        { label: "First Radio", value: "first", variant: "success" },
        { label: "Second Radio", value: "second", variant: "secondary" },
        { label: "Third Radio", value: "third", variant: "danger" },
        { label: "Forth Radio", value: "forth", size: "lg" },
      ],
      modal1Opened: false,
      modal2Opened: false,
      modal3Opened: false,
      modal4Opened: false,
      modal5Opened: false,
      modal6Opened: false,
      modal7Opened: false,
      modal8Opened: false,
      modal9Opened: false,
      modal10Opened: false,
      tableFields: [
        {
          key: "",
          label: "#",
        },
        {
          key: "name",
          label: "File name",
        },
        {
          key: "type",
          label: "File type",
        },
      ],
      tableFields1: [
        {
          key: "",
          label: "#"
        },
        {
          key: "name",
          label: "File name (width:75%)",
          width: '75%'
        },
        {
          key: "type",
          label: "File type",
        },
      ],
      tableSections: [
        {
          type: "FILE",
          name: "Shot#4",
          preview: "https://loremflickr.com/640/360",
          extension: "png",
          __v: 0,
          active: false,
        },
        {
          type: "FILE",
          name: "Photo 345",
          extension: "png",
          preview: "https://loremflickr.com/640/360",
          __v: 0,
          active: false,
        },
        {
          type: "FILE",
          name: "Photo 640",
          extension: "png",
          preview: "https://loremflickr.com/640/360",
          __v: 0,
          active: false,
        },
        {
          type: "FILE",
          name: "Photo 360",
          extension: "png",
          preview: "https://loremflickr.com/640/360",
          __v: 0,
          active: false,
        },
      ],
      sideItem: {
        cells: [
          { name: "id", value: 1 },
          { name: "type", value: "task" },
          { name: "liked", value: false },
          { name: "task", value: { label: "Build UI library", check: false } },
          { name: "project", value: "BIB Library" },
          {
            name: "priority",
            value: { class: "primary", label: "Low Priority" },
          },
          {
            name: "status",
            value: { class: "primary", label: "In-Progress", digits: "75" },
          },
          {
            name: "assignee",
            value: { img: "/img/avatar-2.png", name: "Jordan Bennedict" },
          },
          { name: "date", value: "Mar-11" },
          { name: "time", value: "4" },
          { name: "budget", value: "4000" },
          { name: "rows", value: [] },
        ],
      },
      modal_sample: {
        modalOpened: false,
        tabs: [
          {
            title: "Account",
            value: "account",
          },
          {
            title: "Profile",
            value: "profile",
          },
          {
            title: "Payment",
            value: "payment",
          },
          {
            title: "Subscriptions",
            value: "subscriptions",
          },
          {
            title: "Notifications",
            value: "notifications",
          }
        ],
        activeTab: "account",
        email: "name@company.com",
        number: "514-555-1234",
        password: "1234567890",
        confirm_password: "1234567890",
        lang: "English (United States)",
        timezone: "EST - Eastern Time Zone(-5)"
      }
    };
  },
  methods: {
    dd1ItemClick(data) {
      console.log('dropdown1 item clicked:', data)
    },
    handleChange_CheckboxGroup() {
      console.log(this.selected_CheckboxGroup);
    },
    handleChange_RadioGroup() {
      console.log(this.selected_RadioGroup);
    },
    handleFileFavorite(value) {
      console.log(value);
      this.isFileFavorite = value;
    },
    handleChange_Tabs(selectedTab) {
      console.log(selectedTab);
      this.activeTab = selectedTab.value;
    },
    handleChange__FileInput(files){
      console.log(files)
    },
    handleAction_Table(data) {
      console.log(data)
    },
    handleChange_SampleModalTabs(selectedTab) {
      this.modal_sample.activeTab = selectedTab.value;
    },
  },
};
</script>

<style lang="scss">
@import "~/../bib-shared/css/variables.scss";
@import "~/../bib-shared/css/colors.scss";
@import "~/../bib-shared/css/mixins.scss";
* {
  font-family: "Lato";
}
.board {
  &__unit {
    margin: 1rem;
    padding: 1rem;
    background: $white;

    &__title {
      font-size: 1.5rem;
      color: $dark;
    }

    &__component {
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      background: $light;
      border: dotted 1px gray;

      &__title {
        font-size: 1rem;
        color: $success;
      }

      &__content {
        margin-top: 1rem;
        margin-bottom: 1rem;

        .box {
          border: solid 1px $success;
          border-style: dotted;
          padding: 1rem;

          .item {
            margin-top: 1rem;
            margin-bottom: 1rem;
            align-items: center;

            .code {
              padding-left: 1rem;
              padding-right: 1rem;
              color: $gray5;
              white-space: pre;
              background-color: $dark;
              margin: 1rem;
              border-radius: 6px;
              padding: 1rem;
              font-size: 95%;
              line-height: 1.6;
              overflow-x: auto;
            }

            .highlight-code {
              margin: 1rem;
            }
          }
        }
      }

      .color-content {
        display: flex !important;
        .box .item {
          div:first-child {
            border: 1px solid #e6dcdc;
          }
        }
      }
    }
  }
}
.folder {
  &:hover {
    border-color: $gray6;
  }
  &:active {
    border-color: $black;
  }
}
</style>