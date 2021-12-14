<template >
  <bib-panel-wrapper class="side-panel">
    <!-- <template v-slot:header>
      <div class="side-panel__header">
        <span></span>
        <div class="side-panel__header__controls">
          <bib-icon icon="full-screen" @click.native="fullScreen"> </bib-icon>

          <template v-if="item.cells.find((el) => el.name == 'liked').value">
            <bib-icon
              icon="heart"
              variant="danger"
              @click.native="likeTask(item)"
            >
            </bib-icon>
          </template>
          <template v-else>
            <bib-icon
              icon="heart"
              variant="secondary"
              @click.native="likeTask(item)"
            >
            </bib-icon>
          </template>

          <bib-button pop="more">
            <template v-slot:menu>
              <div class="list">
                <template v-for="(menu, key) in sidePanelMenu">
                  <bib-link class="list__item" :key="key" :label="menu.label">
                  </bib-link>
                </template>
              </div>
            </template>
          </bib-button>

          <bib-icon
            icon="close"
            @click.native="$nuxt.$emit('close-side-panel')"
          >
          </bib-icon>
        </div>
      </div>

      <div class="side-panel__row gap-1" v-rowby="'66.33'">
        <template
          v-if="
            item.cells.find((item) => item.name === 'type').value == 'card' ||
            item.cells.find((item) => item.name === 'type').value == 'task'
          "
        >
          <bib-form-group label="Task name">
            <template v-slot:content>
              <bib-input
                id="main--input"
                :value="cardTitle"
                :task="
                  item.cells.find((item) => item.name === 'task').value.check
                "
                placeholder="Enter task ..."
                @task-val-change="taskChange($event)"
                @change="titleChange($event.target.value)"
              ></bib-input>
            </template>
          </bib-form-group>
        </template>

        <template v-if="item.type == 'shape'" label="Item name">
          <bib-form-group>
            <template v-slot:content>
              <bib-input
                :value="item.label"
                placeholder="Enter title ..."
                @change="titleChange($event.target.value)"
              >
              </bib-input>
            </template>
          </bib-form-group>
        </template>

        <bib-form-group label="Due date">
          <template v-slot:content>
            <div
              class="side-panel__picker__zone"
              v-click-outside="
                () => {
                  showDatePicker = false;
                }
              "
            >
              <bib-input
                :value="dueDate"
                icon="date"
                :placeholder="item.date"
                @click.native="showDatePicker = true"
              >
              </bib-input>
              <div class="side-panel__picker__item" v-if="showDatePicker">
                <bib-datepicker @date-selected="taskDateChange(item, $event)">
                </bib-datepicker>
              </div>
            </div>
          </template>
        </bib-form-group>
      </div>
    </template> -->

    <!-- <template v-slot:menu>
      <div class="side-panel__row side-panel__row--underlined" v-gridby="1">
        <bib-tabs :value="activeTab" :tabs="tabs" @change="tabChange">
        </bib-tabs>
      </div>
    </template>

    <template v-slot:content>
      <template v-if="activeTab == 'Details'">
        <div class="side-panel__rows">
          <div class="side-panel__row">
            <div class="pt-1 gap-2" v-rowby="'33.33.33'">
              <bib-form-group label="Assignee">
                <template v-slot:content>
                  <div class="side-panel__picker__zone">
                    <bib-dropdown
                      :items="users"
                      @select="assigneeChange($event)"
                    ></bib-dropdown>
                  </div>
                </template>
              </bib-form-group>

              <bib-form-group label="Priority">
                <template v-slot:content>
                  <div class="side-panel__picker__zone">
                    <bib-dropdown
                      :items="priorities"
                      @select="priorityChange($event)"
                    ></bib-dropdown>
                  </div>
                </template>
              </bib-form-group>

              <bib-form-group label="Status">
                <template v-slot:content>
                  <div class="side-panel__picker__zone">
                    <bib-dropdown
                      :items="status"
                      @select="statusChange($event)"
                    ></bib-dropdown>
                  </div>
                </template>
              </bib-form-group>
            </div>
          </div>
          <div class="side-panel__row">
            <div v-rowby="'50.50'" class="gap-2">
              <bib-form-group label="Project">
                <template v-slot:content>
                  <div class="side-panel__picker__zone">
                    <bib-dropdown
                      :items="projects"
                      @select="projectChange($event)"
                    ></bib-dropdown>
                  </div>
                </template>
              </bib-form-group>

              <bib-form-group label="Department">
                <template v-slot:content>
                  <div class="side-panel__picker__zone">
                    <bib-dropdown
                      :items="departments"
                      @select="departmentChange($event)"
                    ></bib-dropdown>
                  </div>
                </template>
              </bib-form-group>
            </div>
          </div>
          <div class="side-panel__row">
            <div v-rowby="'33.33.33'" class="gap-2">
              <bib-form-group label="Time">
                <template v-slot:content>
                  <div class="position-relative">
                    <bib-input
                      :value="
                        item.cells.find((item) => item.name === 'time').value
                      "
                      type="time"
                      @change="timeChange"
                    >
                    </bib-input>
                  </div>
                </template>
              </bib-form-group>

              <bib-form-group label="Budget">
                <template v-slot:content>
                  <bib-input
                    :value="
                      item.cells.find((item) => item.name === 'budget').value
                    "
                    type="currency"
                    @change="budgetChange"
                  >
                  </bib-input>
                </template>
              </bib-form-group>

              <div class="pt-2">
                <bib-button plus label="Add a field"></bib-button>
              </div>
            </div>
          </div>
          <div class="side-panel__row">
            <bib-form-group label="Description">
              <template v-slot:content>
                <bib-input type="textarea"></bib-input>
              </template>
            </bib-form-group>
          </div>
          <div class="side-panel__row">
            <bib-button plus label="Add Subtask" @click.native="addSubtask">
            </bib-button>
            <div class="side-panel__subtask">
              <bib-table headless :fields="fields" :sections="sections">
                <template #cell(no)="data">
                  {{ data.keyI }}
                </template>
                <template #cell(task)="data">
                  <div class="align-center" :class="{ 'gap-1': data.value }">
                    <template v-if="data.value">
                      <bib-icon
                        class="shape-circle"
                        :class="data.value.done ? 'bg-success' : 'bg-secondary'"
                        icon="tick"
                        variant="white"
                        :scale="1.5"
                      >
                      </bib-icon>
                      <span class="text-dark">
                        {{ data.value.name }}
                      </span>
                    </template>
                    <template v-else>
                      <bib-icon
                        class="shape-circle bg-secondary"
                        icon="tick"
                        variant="white"
                        :scale="1.5"
                      >
                      </bib-icon>
                      <bib-input
                        class="border-none"
                        placeholder="Enter text..."
                      >
                      </bib-input>
                    </template>
                  </div>
                </template>
                <template #cell(assignee)="data">
                  <div class="align-center gap-1">
                    <template v-if="data.value">
                      <bib-avatar
                        class="shape-circle"
                        :src="data.value.avatar"
                        :width="1.5"
                        :height="1.5"
                      >
                      </bib-avatar>
                      <span class="text-dark">{{ data.value.name }}</span>
                    </template>
                    <template v-else>
                      <bib-avatar
                        class="shape-circle"
                        src="/img/avatar-none.png"
                        :width="1.5"
                        :height="1.5"
                      >
                      </bib-avatar>
                      <span>Assign to...</span>
                    </template>
                  </div>
                </template>
                <template #cell(date)="data">
                  <template v-if="data.value">
                    <div class="text-dark">
                      {{ data.value }}
                    </div>
                  </template>
                  <template v-else>
                    <span>Set Due Date..</span>
                  </template>
                </template>
                <template #cell(action)="data">
                  <template
                    v-if="
                      Object.keys(sections[data.keyS].items[data.keyI]).length
                    "
                  >
                    <bib-icon icon="elipsis" variant="gray6"> </bib-icon>
                  </template>
                  <template v-else>
                    <bib-icon icon="close" variant="gray6"> </bib-icon>
                  </template>
                </template>
              </bib-table>
            </div>
          </div>
        </div>

        <div class="side-panel__footer">
          <div class="side-panel__team p-05">
            <h4>Team</h4>
            <bib-avatar
              class="pl-1 shape-circle"
              src="/img/avatar.png"
              :width="1.5"
              :height="1.5"
            >
            </bib-avatar>
            <div class="side-panel__team--offset">
              <bib-avatar
                class="shape-circle"
                src="/img/avatar-2.png"
                :width="1.5"
                :height="1.5"
              ></bib-avatar>
              <bib-avatar
                class="shape-circle"
                src="/img/avatar-3.png"
                :width="1.5"
                :height="1.5"
              ></bib-avatar>
              <bib-avatar
                class="shape-circle"
                src="/img/avatar-4.png"
                :width="1.5"
                :height="1.5"
              ></bib-avatar>
            </div>
            <div class="justify-end pl-1">
              <bib-icon icon="plus" variant="success"> </bib-icon>
            </div>
          </div>
          <bib-input
            placeholder="Enter your comment"
            img="/img/avatar-2.png"
          ></bib-input>
        </div>
      </template>

      <template v-if="activeTab == 'Team'">
        <div class="side-panel__wrapper">
          <div class="side-panel__row">
            <details class="side-panel__details--underlined" v-gridby="1" open>
              <summary>
                <div>Team</div>
                <div class="justify-end">
                  <bib-button pop="more">
                    <template v-slot:menu> </template>
                  </bib-button>
                </div>
              </summary>
              <div class="side-panel__details__body">
                <div
                  class="side-panel__details__item"
                  v-for="(user, key) in users"
                  :key="key"
                >
                  <bib-avatar
                    class="shape-circle"
                    :src="user.img"
                    :width="1.5"
                    :height="1.5"
                  ></bib-avatar>
                  <span>{{ user.label }} (Assignee)</span>
                  <div class="justify-end">
                    <bib-button class="justify-end" pop="more">
                      <template v-slot:menu>
                        <div class="list">
                          <bib-link
                            class="list__item"
                            :label="menu.label"
                            v-for="(menu, key) in teamItemMenu"
                            :key="key"
                          >
                          </bib-link>
                        </div>
                      </template>
                    </bib-button>
                  </div>
                </div>
                <bib-button plus label="Add team members"></bib-button>
              </div>
            </details>
          </div>
          <div class="side-panel__row">
            <details class="side-panel__details--underlined" v-gridby="1" open>
              <summary>
                <div>Followers</div>
                <div class="justify-end">
                  <bib-button pop="more">
                    <template v-slot:menu> </template>
                  </bib-button>
                </div>
              </summary>
              <div class="side-panel__details__body">
                <div
                  class="side-panel__details__item"
                  v-for="(user, key) in users"
                  :key="key"
                >
                  <bib-avatar
                    class="shape-circle"
                    :src="user.img"
                    :width="1.5"
                    :height="1.5"
                  ></bib-avatar>
                  <span>{{ user.label }}</span>
                  <div class="justify-end">
                    <bib-button pop="more">
                      <template v-slot:menu>
                        <div class="list">
                          <bib-link
                            class="list__item"
                            :label="menu.label"
                            v-for="(menu, key) in followerItemMenu"
                            :key="key"
                          >
                          </bib-link>
                        </div>
                      </template>
                    </bib-button>
                  </div>
                </div>
                <bib-button plus label="Add followers"></bib-button>
              </div>
            </details>
          </div>
        </div>
      </template>

      <template v-if="activeTab == 'Log'">
        <div class="side-panel__row">
          <details class="side-panel__details--underlined" v-gridby="1" open>
            <summary>
              <div>Log</div>
              <bib-button pop="more">
                <template v-slot:menu>
                  <div class="list">
                    <bib-link
                      class="list__item"
                      :label="menu.label"
                      v-for="(menu, key) in logGroupItemMenu"
                      :key="key"
                    >
                    </bib-link>
                  </div>
                </template>
              </bib-button>
            </summary>
            <div class="side-panel__details__body">
              <div v-for="(item, key) in log" :key="key">
                <details
                  class="
                    side-panel__details--underlined side-panel__details--muted
                  "
                  v-gridby="1"
                  open
                >
                  <summary>
                    <div>{{ item.date }}</div>
                  </summary>

                  <div class="pt-1" v-for="(log, key) in item.items" :key="key">
                    <div class="side-panel__log">
                      <div class="side-panel__log__header">
                        <div class="pt-05">
                          <bib-avatar
                            :src="log.user.img"
                            :width="1.5"
                            :height="1.5"
                            indicator
                          ></bib-avatar>
                        </div>
                        <span></span>
                        <h4 class="pt-05 bold">{{ log.user.label }}</h4>
                        <span></span>
                        <p class="pt-05">{{ log.date }}</p>
                        <div class="justify-end">
                          <bib-button pop="more">
                            <template v-slot:menu>
                              <div class="list">
                                <bib-link
                                  class="list__item"
                                  :label="menu.label"
                                  v-for="(menu, key) in logItemMenu"
                                  :key="key"
                                >
                                </bib-link>
                              </div>
                            </template>
                          </bib-button>
                        </div>
                      </div>
                      <div
                        v-html="log.body"
                        class="side-panel__log__body"
                      ></div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </details>
        </div>
      </template>

      <template v-if="activeTab == 'Files'">
        <div class="side-panel__row">
          <details class="side-panel__details--underlined" v-gridby="1" open>
            <summary>
              <div>Files</div>
              <bib-button class="justify-end" pop="more">
                <template v-slot:menu>
                  <div class="list">
                    <bib-link
                      class="list__item"
                      :label="menu.label"
                      v-for="(menu, key) in folderItemMenu"
                      :key="key"
                    >
                    </bib-link>
                  </div>
                </template>
              </bib-button>
            </summary>
            <div
              class="
                side-panel__details__body side-panel__wrapper side-panel__rows
              "
            >
              <div
                class="side-panel__details__item"
                v-for="(item, key) in files"
                :key="key"
              >
                <bib-icon :class="'shape-' + item.type" :icon="item.icon">
                </bib-icon>
                <span>{{ item.label }}</span>
                <div class="justify-end">
                  <bib-button pop="more">
                    <template v-slot:menu>
                      <div class="list">
                        <bib-link
                          class="list__item"
                          :label="menu.label"
                          v-for="(menu, key) in fileItemMenu"
                          :key="key"
                        >
                        </bib-link>
                      </div>
                    </template>
                  </bib-button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </template>
    </template> -->
  </bib-panel-wrapper>
</template>

<script>
import BibButton from "../Atoms/BibButton.vue";
import BibIcon from "../Atoms/BibIcon.vue";
import BibInput from "../Atoms/BibInput.vue";
import BibDropdown from "../Molecules/BibDropdown.vue";
/**
 * @module Organisms/BibSidePanel
 * @author Sharp Eye
 * @desc Side Panel component
 * @vue-prop {Object} item=null - Item to preview in side panel.
 * @vue-prop {Boolean} focus=null - whether to focus input on side panel.
 **/
export default {
  components: { BibDropdown, BibButton, BibIcon, BibInput },
  name: "BibSidePanel",
  props: {
    item: {
      type: Object,
      default() {
        return null;
      },
    },
    focus: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      render: true,
      taskValue: false,
      showDatePicker: false,
      cardTitle: "",
      dueDate: new Date().toString(),
      activeTab: "Details",
      tabs: ["Details", "Team", "Chat", "Notes", "Files", "Log"],
      log: [
        {
          date: "Monday, March 1",
          items: [
            {
              user: { img: "/img/avatar-2.png", label: "Tom Oisant" },
              date: "Mar 1st @ 8:03 AM",
              body: "Created a Task:<a class='text-primary' href='#'>Task Name</a>",
            },
            {
              user: { img: "/img/avatar-3.png", label: "Catherine Labelle" },
              date: "Mar 1st @ 8:03 AM",
              body: "Assigned a <a href='#' class='text-primary'>Task Name</a> to <a class='text-success' href='#'>Johny Bananas</a>",
            },
          ],
        },
      ],
      files: [
        {
          id: 0,
          type: "rounded",
          icon: "rectangle",
          label: "File",
          desc: "",
          size: "lg",
        },
        {
          id: 1,
          type: "rounded",
          icon: "rectangle",
          label: "File C",
          desc: "",
          size: "lg",
        },
        {
          id: 2,
          type: "rounded",
          icon: "rectangle",
          label: "File A",
          desc: "",
          size: "lg",
        },
        {
          id: 3,
          type: "rounded",
          icon: "rectangle",
          label: "File B",
          desc: "",
          size: "lg",
        },
        {
          id: 4,
          type: "rounded",
          icon: "rectangle",
          label: "File 5",
          desc: "",
          size: "lg",
        },
        {
          id: 5,
          type: "rounded",
          icon: "rectangle",
          label: "File 6",
          desc: "",
          size: "lg",
        },
        {
          id: 6,
          type: "rounded",
          icon: "rectangle",
          label: "File 7",
          desc: "",
          size: "lg",
        },
        {
          id: 7,
          type: "rounded",
          icon: "rectangle",
          label: "File 8",
          desc: "",
          size: "lg",
        },
        {
          id: 8,
          type: "rounded",
          icon: "rectangle",
          label: "File 9",
          desc: "",
          size: "lg",
        },
      ],
      sidePanelMenu: [
        {
          label: "Opt #1",
        },
        {
          label: "Opt #2",
        },
        {
          label: "Opt #3",
        },
      ],
      teamItemMenu: [
        {
          label: "View Profile",
        },
        {
          label: "Send a message",
        },
        {
          label: "Set a meeting",
        },
        {
          label: "Assign a Subtask",
        },
        {
          label: "Asign a Task",
        },
        {
          label: "Share contact",
        },
        {
          label: "Remove from team",
        },
        {
          label: "Report",
        },
      ],
      followerItemMenu: [
        {
          label: "View Profile",
        },
        {
          label: "Send a message",
        },
        {
          label: "Set a meeting",
        },
        {
          label: "Assign a Subtask",
        },
        {
          label: "Asign a Task",
        },
        {
          label: "Share contact",
        },
        {
          label: "Remove follower",
        },
        {
          label: "Report",
        },
      ],
      logGroupItemMenu: [
        {
          label: "Sort by date",
        },
        {
          label: "Sort by name",
        },
        {
          label: "Export",
        },
      ],
      logItemMenu: [
        {
          label: "Undo",
        },
        {
          label: "Flag",
        },
        {
          label: "Report",
        },
      ],
      folderItemMenu: [
        {
          label: "Open folder",
        },
        {
          label: "Share folder",
        },
        {
          label: "Download",
        },
        {
          label: "Remove",
        },
      ],
      fileItemMenu: [
        {
          label: "Preview file",
        },
        {
          label: "Open with...",
        },
        {
          label: "Share",
        },
        {
          label: "Download",
        },
        {
          label: "Remove",
        },
      ],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      users: [
        {
          text: "Johan Mozart",
          img: "/img/avatar.png",
        },
        {
          text: "Jordan Bennedict",
          img: "/img/avatar-2.png",
        },
        {
          text: "Elza Benneston",
          img: "/img/avatar-3.png",
        },
        {
          text: "Catherine Labelle",
          img: "/img/avatar-4.png",
        },
      ],
      priorities: [
        {
          text: "High Priority",
        },
        {
          text: "Medium Priority",
        },
        {
          text: "Low Priority",
        },
        {
          text: "Very Low Priority",
        },
        {
          text: "Regular Priority",
        },
      ],
      status: [
        {
          label: "On hold",
          size: "sm",
          variant: "warning",
        },
        {
          label: "Stopped",
          size: "sm",
          variant: "danger",
        },
        {
          label: "In-Progress",
          size: "sm",
          variant: "primary",
        },
        {
          label: "Completed",
          size: "sm",
          variant: "success",
        },
      ],
      projects: [
        {
          text: "Project #1",
        },
        {
          text: "Project #2",
        },
        {
          text: "Project #3",
        },
        {
          text: "Project #4",
        },
      ],
      departments: [
        {
          text: "CS Department",
        },
        {
          text: "IT Department",
        },
        {
          text: "HR Department",
        },
        {
          text: "Administration",
        },
      ],
      searchedUsers: [],
      searchedPriorities: [],
      searchedStatus: [],
      searchedProjects: [],
      searchedDepartments: [],
      showAssignPicker: false,
      showPriorityPicker: false,
      showStatusPicker: false,
      showProjectPicker: false,
      showDepartmentPicker: false,
      assignedUser: { img: "", name: "" },
      assignedPriority: { class: "primary", label: "Not Set" },
      assignedStatus: { class: "primary", label: "Not Started" },
      assignedProjects: [],
      assignedDepartments: {},
      fields: [
        {
          key: "no",
          label: "",
        },
        {
          key: "task",
          label: "",
        },
        {
          key: "assignee",
          label: "",
        },
        {
          key: "date",
          label: "",
        },
        {
          key: "action",
          label: "",
        },
      ],
      sections: [
        {
          label: "Past Due",
          variant: "danger",
          items: [
            {
              task: {
                done: true,
                name: "Subtask name",
              },
              assignee: {
                name: "John Doe",
                avatar: "/img/avatar.png",
              },
              date: "Jan-22",
            },
            {
              task: {
                done: true,
                name: "Subtask name",
              },
              assignee: {
                name: "John Doe",
                avatar: "/img/avatar.png",
              },
              date: "Jan-22",
            },
            {
              task: {
                done: true,
                name: "Subtask name",
              },
              assignee: {
                name: "John Doe",
                avatar: "/img/avatar.png",
              },
              date: "Jan-22",
            },
            {
              task: {
                done: true,
                name: "Subtask name",
              },
              assignee: {
                name: "John Doe",
                avatar: "/img/avatar.png",
              },
              date: "Jan-22",
            },
            {
              task: {
                done: true,
                name: "Subtask name",
              },
              assignee: {
                name: "John Doe",
                avatar: "/img/avatar.png",
              },
              date: "Jan-22",
            },
          ],
        },
      ],
    };
  },
  watch: {
    // focus: {
    //   immediate: true,
    //   handler(val) {
    //     this.focusInput();
    //   },
    // },
    // item: {
    //   immediate: true,
    //   // handler(val) {
    //   //   this.assignedUser = val.cells.find(
    //   //     (item) => item.name === "assignee"
    //   //   ).value;
    //   //   if (val.cells.find((item) => item.name === "priority")) {
    //   //     this.assignedPriority = val.cells.find(
    //   //       (item) => item.name === "priority"
    //   //     ).value;
    //   //   } else {
    //   //     this.assignedPriority = {};
    //   //   }
    //   //   if (val.cells.find((item) => item.name === "status")) {
    //   //     this.assignedStatus = val.cells.find(
    //   //       (item) => item.name === "status"
    //   //     ).value;
    //   //   } else {
    //   //     this.assignedStatus = {};
    //   //   }
    //   //   if (val.cells.find((item) => item.name === "department")) {
    //   //     this.assignedDepartments = val.cells.find(
    //   //       (item) => item.name === "department"
    //   //     ).value;
    //   //   } else {
    //   //     this.assignedDepartments = {};
    //   //   }
    //   //   if (val.cells.find((item) => item.name === "project")) {
    //   //     this.assignedProjects.label = val.cells.find(
    //   //       (item) => item.name === "project"
    //   //     ).value;
    //   //   }
    //   //   this.dueDate = val.cells.find((item) => item.name === "date").value;
    //   //   this.cardTitle = val.cells.find(
    //   //     (item) => item.name === "task"
    //   //   ).value.label;
    //   // },
    // },
  },
  created() {
    //EVENT HANDLERS ON CREATED
    this.$nuxt.$on("close-picker", () => {
      //HANDLES CLOSING DATE PICKER
      this.showDatePicker = false;
    }),
      this.$nuxt.$on("val-changed", () => {
        //IF EVENT VALUE IS CHANGED RELOAD UI
        this.reload();
      });
  },
  mounted() {
    //FOCUST INPUT IF FOCUS IS TRUE
    // this.focusInput();
    // //BIND DATA AS COMPONENT MOUNTS
    // this.searchedUsers = this.users;
    // this.searchedPriorities = this.priorities;
    // this.searchedStatus = this.status;
    // this.searchedDepartments = this.departments;
    // this.searchedProjects = this.projects;
    // this.cardTitle = this.item.cells.find(
    //   (item) => item.name === "task"
    // ).value.label;
    // this.assignedUser.name = this.item.cells.find(
    //   (item) => item.name === "assignee"
    // ).value.name;
    // this.taskValue = this.item.cells.find(
    //   (item) => item.name === "task"
    // ).value.check;
    // this.assignedUser.img = this.item.cells.find(
    //   (item) => item.name === "assignee"
    // ).value.img;
    // this.assignedPriority = this.item.cells.find(
    //   (item) => item.name === "priority"
    // ).value;
    // this.assignedStatus = this.item.cells.find(
    //   (item) => item.name === "status"
    // ).value;
    // this.assignedProjects.label = this.item.cells.find(
    //   (item) => item.name === "project"
    // ).value;
    // this.dueDate =
    //   this.months[
    //     new Date(
    //       this.item.cells.find((item) => item.name === "date").value
    //     ).getMonth()
    //   ] +
    //   "-" +
    //   new Date(
    //     this.item.cells.find((item) => item.name === "date").value
    //   ).getDate();
  },
  updated() {
    //REBIND DATA IF COMPONENT IS CHANGED
    // this.dueDate = this.item.cells.find((item) => item.name === "date").value;
    // this.taskValue = this.item.cells.find(
    //   (item) => item.name === "task"
    // ).value.check;
    // this.cardTitle = this.item.cells.find(
    //   (item) => item.name === "task"
    // ).value.label;
    // this.assignedProjects.label = this.item.cells.find(
    //   (item) => item.name === "project"
    // ).value;
  },
  methods: {
    /* Asynchronously refreshes side panel UI. */
    async reload() {
      this.render = false;
      await this.$nextTick();
      this.render = true;
    },
    /* Focuses the main inputs in the task card. */
    focusInput() {
      if (this.focus == true) {
        let main = document.getElementById("main--input");
        if (main) {
          main.focus();
        }
      }
    },
    /* Gets called when user request full screen function. */
    fullScreen() {
      let doc = document.documentElement;
      if (document.fullscreen) {
        document.exitFullscreen();
      }
      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.webkitRequestFullscreen) {
        doc.webkitRequestFullscreen();
      } else if (doc.msRequestFullscreen) {
        doc.msRequestFullscreen();
      }
    },
    /* Gets called when user changes task check value. */
    taskChange(value) {
      this.taskValue = value;
      this.item.cells.find((item) => item.name === "task").value.check = value;
    },
    tabChange(tab) {
      this.activeTab = tab;
    },
    /* Gets called when user likes a task. */
    likeTask(item) {
      item.cells.find((el) => el.name == "liked").value = !item.cells.find(
        (el) => el.name == "liked"
      ).value;
    },
    /* Gets called when user changes task title. */
    titleChange(value) {
      this.cardTitle = value;
      this.item.cells.find((item) => item.name === "task").value.label =
        this.cardTitle;
    },
    /* Gets called when user changes task budget. */
    budgetChange(event) {
      var value = event.target.value;

      // this.item.cells.find(item => item.name === 'budget').value = value
    },
    /* Gets called when user changes task time. */
    timeChange(event) {
      var value = event.target.value;

      // this.item.cells.find((item) => item.name === "time").value = value;
      // //INCREMENTING TIME INPUT WIDTH
      // if (value.length >= 1 && value.length < 10) {
      //   document.getElementById("timeSuffix").style.left =
      //     (value.length + 1) * 8 + 18 + "px";
      // } else if (value.length >= 10) {
      //   this.item.cells.find((item) => item.name === "time").value =
      //     Math.max(Math.floor(Math.log10(Math.abs(value))), 0) + 1;
      // } else {
      //   document.getElementById("timeSuffix").style.left = 16 + "px";
      // }
    },
    /* Gets called when user changes task assignee. */
    assigneeChange(value) {
      this.assignedUser.name = value.text;
      this.assignedUser.img = value.img;
      this.item.cells.find((item) => item.name === "assignee").value =
        this.assignedUser;
      this.showAssignPicker = false;
    },
    /* Gets called when user changes task priority. */
    priorityChange(item) {
      this.assignedPriority.class = item.variant;
      this.assignedPriority.label = item.label;
      this.item.cells.find((item) => item.name === "priority").value =
        this.assignedPriority;
      this.showPriorityPicker = false;
    },
    /* Gets called when user changes task status. */
    statusChange(item) {
      this.assignedStatus.class = item.variant;
      this.assignedStatus.label = item.label;
      this.item.cells.find((item) => item.name === "status").value =
        this.assignedStatus;
      this.showStatusPicker = false;
    },
    /* Gets called when user changes task projects. */
    projectChange(item) {
      this.assignedProjects.label = item.label;
      this.item.cells.find((item) => item.name === "project").value =
        this.assignedProjects.label;
    },
    /* Gets called when user changes task departments. */
    departmentChange(item) {
      this.assignedDepartments.label = item.label;
    },
    /* Gets called when user changes task due date. */
    taskDateChange(item, value) {
      var date = new Date(value);
      this.dueDate = this.months[date.getMonth()] + "-" + date.getDate();
      this.item.cells.find((item) => item.name === "date").value = this.dueDate;
    },
    addSubtask() {
      this.sections[0].items.unshift({});
    },
  },
};
</script>

<style lang="scss" scoped>
details {
  display: block;

  summary {
    padding: 0.25rem 0 0.25rem 0.25rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    width: 100%;

    div {
      width: 100%;
      display: inline-block;
      margin: auto 0;
    }

    span {
      display: flex;
    }

    &:hover {
      &::before {
        color: $dark;
      }
    }

    &::before {
      content: "▼";
      width: fit-content;
      font-family: auto;
      transform-origin: center;
      transform: rotate(-90deg);
      color: $secondary;
      font-size: $font-size-sm * 0.75;
      padding: 0.75rem;
    }

    &:focus {
      outline: 0;
    }
  }

  &[open] > {
    summary {
      &::before {
        color: $dark;
        transform-origin: center;
        padding: 0.95rem 0.75rem 0.5rem 0.75rem;
        transform: rotate(0deg);
      }
    }
  }
}

.side-panel {
  &__header {
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
    height: 2.5rem;
    display: grid;
    padding: 0.5rem 1rem;
    grid-template-columns: auto 9rem;

    &__controls {
      display: flex;
      justify-content: space-between;
      padding: 0.25rem;

      * {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  &__rows {
    height: calc(91vh - #{$item-width * 1.15});
  }

  &__row {
    grid-gap: 1.5rem;
    grid-row-gap: 0.5rem;
    position: relative;
    padding: 0.25rem 2.5rem 0 2.5rem;

    &--underlined {
      border-bottom: 1px solid $secondary;
    }
  }

  &__subtask {
    max-height: 100px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  &__picker {
    &__zone {
      position: relative;
    }

    &__item {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 999;
    }
  }

  &__footer {
    background: $light;
    padding: 0.5rem 2rem 1rem 2rem;
  }

  &__team {
    display: flex;
    padding: 0.25rem;

    h4 {
      color: $gray1;
      font-weight: 600;
    }

    &--offset {
      display: flex;
      margin-left: 1rem;

      .avatar {
        margin-right: -0.25rem;
      }
    }
  }

  &__wrapper {
    height: calc(100vh - #{$item-width * 0.85});
    overflow-x: none;
    overflow-y: scroll;
  }

  &__details {
    &--underlined {
      summary {
        border-bottom: 1px solid $dark;
        font-weight: 400;

        &::before {
          color: $secondary !important;
        }
      }
    }

    &--muted {
      summary {
        color: $gray1;
        border-color: $gray1;
        font-size: $font-size-sm * 1.1;

        &::before {
          color: $secondary !important;
        }
      }
    }

    &__item {
      display: grid;
      grid-template-columns: 2.5rem auto 6rem;
      padding-top: 0.5rem;
      height: 2.5rem;
      border-bottom: 1px solid $gray2;
    }

    &__body {
      padding: 1rem 2.5rem;
    }
  }

  &__log {
    background: $light;
    min-height: 4rem;
    border-radius: 0.25rem;
    padding-left: 0.45rem;

    &__header {
      display: grid;
      grid-template-columns: 1.5rem 1rem max-content 0.5rem auto 5rem;

      h4 {
        width: fit-content;
      }

      p {
        color: lighten($dark, 15%);
        text-align: left;
        font-size: $font-size-sm * 1.1;
      }
    }

    &__body {
      padding: 0.25rem 0.45rem 0.75rem 1.5rem;
    }
  }
}
</style>