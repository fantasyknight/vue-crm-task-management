<template>
	<div class="position-fixed inset-none">
		<bib-header></bib-header>
		<bib-sidebar :menuItems="menuItems"></bib-sidebar>
		<div class="main">
			<div class="bread d-flex">
				<!-- <bib-bread-crumbs :links="links" /> -->
				<div class="arrow back"></div>
				<h3 class="bold pt-05"> Folder Name</h3 >
			</div>
			<div class="menu">
				<bib-tabs :value="activeTab" @change="tabChange" :tabs="tabs"></bib-tabs>
			</div>

			<!-- LIST TAB -->
			<div  v-if="activeTab=='List'">	
			</div>

			<!-- BOARD TAB -->
			<div class="board__view" v-if="activeTab == 'Board'">
				<bib-toolbar></bib-toolbar>
				<draggable :class="'board__view board__view--'+boardType" v-bind="dragOptionsColumn" :list="sections">
					<template v-for="(section,key) in sections" >
						<template v-if="boardType == 'kanban'">

						<div :key="key" class="board__view__content" >
								<details open>
									<summary class="board__view__content__header justify-between">
										<h4 class="width-75 pt-05 mr-auto">{{section.title }}</h4>
										<span class="control--exp">
										<bib-icon class="pr-05" @click.native="addTask($event,key)" icon="plus" variant="secondary"></bib-icon>
										<bib-button pop="more">
											<template v-slot:menu>
												<div class="list">
													<template v-for="(link, key) in columnMenu">
														<bib-link class="list__item" :key="key" :label="link.label" :href="link.to"></bib-link>
													</template>
												</div>
											</template>
										</bib-button>
									</span>
								</summary>
								<draggable class="board__view__content__items" v-bind="dragOptions" :list="sections.items">
								<div v-for="(item, key) in section.items">
									<bib-card  @change="taskChange(item,$event)"  :outline="item.active" :key="key" :label='item.cells.find((el) => el.name == "task").value.label'  v-if='item.cells.find((el) => el.name == "type").value == "task"' :card="item" @click.native="showItemInfo(item)" :indicator='item.cells.find((el) => el.name == "status").value.class'>
										<template v-slot:options>
											<bib-button class="m-auto" pop="more">
												<template v-slot:menu>
													<div class="list">
														<bib-link v-for="(link, key) in cardMenu" :key="key" class="list__item" :label="link.label" :href="link.to"> 
														</bib-link> 
													</div>
												</template>
											</bib-button>
											<bib-icon
											icon="heart"
											variant="danger"
											 v-if='item.cells.find((el) => el.name == "liked").value' @click.native="likeTask(item)" class="p-05 m-auto"
											></bib-icon>
											<bib-icon
											icon="heart"
											variant="gray"
											v-else @click.native="likeTask(item)" class="p-05 m-auto">
											</bib-icon>
										</template>
										<template v-slot:controls>
											<details class="board__view__picker" v-click-outside="outsidePickers"> 
												<summary class="board__view__picker__trigger">
													<bib-avatar :width="1.5" :height="1.5" :src='item.cells.find((el) => el.name == "assignee").value.img'></bib-avatar>
												</summary> 
												<div class="board__view__picker__zone board__view__picker__zone--left">
													<bib-dropdown :items="users"></bib-dropdown>
												</div>
											</details>
											<div class="card__controls__comment d-flex">
												<bib-icon class="m-auto" icon="comment"></bib-icon>
												<small class="text-secondary m-auto">15</small>
											</div>
											<div class="card__controls__progress mt-auto">
												<span class="pb-auto">
													<small class="text-secondary">Status</small> 
													<small class="text-secondary">{{item.cells.find((el) => el.name == "status").value.digits}}%</small>
												</span>
												<bib-progress :value='item.cells.find((el) => el.name == "status").value.digits' class="m-auto"></bib-progress>
											</div>


											<details class="board__view__picker" v-click-outside="outsidePickers"> 
												<summary class="board__view__picker__trigger">
													<span class="card__controls__date">{{item.cells.find((el) => el.name == "date").value}}</span>
												</summary> 
												<div class="board__view__picker__zone board__view__picker__zone--right">
													<bib-datepicker @date-selected="dateChange(item,$event)"></bib-datepicker>
												</div>
											</details>
										</template>
									</bib-card>

									<!-- BIB ITEM REPLACEMENT -->
									<div v-if='item.cells.find((el) => el.name == "type").value == "file"' class="bg-white m-auto mb-1 rounded height-305 width-item" v-rowby="'25.75.25'">
										<div class="m-auto">
											<bib-avatar :src="item.cells.find((el) => el.name =='icon').value"></bib-avatar>
										</div>
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											<div>
												<small class="text-primary">Low Priority</small>
												<div>{{item.cells.find((el) => el.name == "label").value}}</div>
											</div>
										</div>
										<div class="m-auto">
											<bib-button pop="more">
												<template v-slot:menu>
													<div class="list">
														<bib-link class="list__item" v-for="(link, key) in columnMenu" :key="key" :label="link.label" :href="link.to">

														</bib-link>
													</div>
												</template>
											</bib-button>
										</div>
									</div>
								</div>
							</draggable>    
								</details>

							                 
						</div> 
						</template>
						<div v-else>
								<details :key="key" open>
									<summary>
										<div class="justify-between"> 
										<span>{{section.title}}</span>
										<span class="gap-1">
											<bib-icon @click.native="addTask($event, key)" icon="plus"></bib-icon>
											<bib-button pop="more">
												<template v-slot:menu>
													<div class="list">
														<bib-link class="list__item" v-for="(link, key) in columnMenu" :key="key" :label="link.label" :href="link.to">

														</bib-link>
													</div>
												</template>
											</bib-button>
										</span>
									</div>
									</summary>
									<div class="board__view__content board__view__content__items">
										<draggable class="drag-area" :key="key" v-bind="dragOptions" :list="sections.items" v-for="(item, key) in section.items">
											<bib-card  @change="taskChange(item,$event)" :outline="item.active" :key="key" :label='item.cells.find((el) => el.name == "task").value.label'  v-if='item.cells.find((el) => el.name == "type").value == "task"' :card="item" @click.native="showItemInfo(item)" :indicator='item.cells.find((el) => el.name == "status").value.class'>
												<template v-slot:options>
													<bib-button class="m-auto" pop="more">
														<template v-slot:menu>
															<div class="list">
																<bib-link v-for="(link, key) in cardMenu" :key="key" class="list__item" :label="link.label" :href="link.to"> 
																</bib-link> 
															</div>
														</template>
													</bib-button>
													<bib-icon
													icon="heart"
													variant="danger" v-if='item.cells.find((el) => el.name == "liked").value' @click.native="likeTask(item)" class="p-05 m-auto" ></bib-icon>
													<bib-icon
													icon="heart"
													variant="gray" v-else @click.native="likeTask(item)" class="p-05 m-auto" ></bib-icon>
												</template>
												<template v-slot:controls>
													<details class="board__view__picker" v-click-outside="outsidePickers"> 
														<summary class="board__view__picker__trigger">
															<bib-avatar :width="1.5" :height="1.5" :src='item.cells.find((el) => el.name == "assignee").value.img'></bib-avatar>
														</summary> 
														<div class="board__view__picker__zone board__view__picker__zone--left">
															<bib-dropdown :items="users"></bib-dropdown>
														</div>
													</details>
											<div class="card__controls__comment d-flex">
												<bib-icon class="m-auto"  icon="comment"></bib-icon>
												<small class="text-secondary m-auto">15</small>
											</div>
											<div class="card__controls__progress mt-auto">
												<span class="pb-auto">
													<small class="text-secondary">Status</small> 
													<small class="text-secondary">{{item.cells.find((el) => el.name == "status").value.digits}}%</small>
												</span>
												<bib-progress :value='item.cells.find((el) => el.name == "status").value.digits' class="m-auto"></bib-progress>
											</div>


											<details class="board__view__picker" v-click-outside="outsidePickers"> 
												<summary class="board__view__picker__trigger">
													<span class="card__controls__date">{{item.cells.find((el) => el.name == "date").value}}</span>
												</summary> 
												<div class="board__view__picker__zone board__view__picker__zone--right">
													<bib-datepicker @date-selected="dateChange(item,$event)"></bib-datepicker>
												</div>
											</details>
										</template>
									</bib-card>
									<!-- BIB ITEM REPLACEMENT -->
									<div v-if='item.cells.find((el) => el.name == "type").value == "file"' class="bg-white m-auto mb-1 rounded height-305 width-item mt-2" v-rowby="'25.75.25'">
										<div class="m-auto">
											<bib-avatar :src="item.cells.find((el) => el.name =='icon').value"></bib-avatar>
										</div>
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											{{item.cells.find((el) => el.name == "label").value}}
										</div>
										<div class="m-auto">
											<bib-button pop="more">
												<template v-slot:menu>
													<div class="list">
														<bib-link class="list__item" v-for="(link, key) in columnMenu" :key="key" :label="link.label" :href="link.to">

														</bib-link>
													</div>
												</template>
											</bib-button>
										</div>
									</div>
								</draggable>  
										</div>
									</details>
							<div >
								  
							</div></div>
						</template>
						<div class="board__view__content">
							<div class="d-flex pt-05 cursor-pointer" @click="addColumn">
								<bib-button plus label="Add new column"></bib-button>
							</div>
						</div>
					</draggable>
					<div class="board__view__slider" v-if="showSlider" v-click-outside="outsideSlider">
						<bib-side-panel class="peak" :item="itemData" :focus="focusInput"></bib-side-panel>
					</div>
				</div>

				<!-- CONVERSTAION TAB -->
				<div v-if="activeTab=='Conversation'">
					<div class="conversation">
						<div class="conversation__sidebar">
							<div class="conversation__team__row">
								<!-- BIB ITEM REPLACEMENT -->
									<div class="bg-white m-auto rounded m-05 height-2 width-item" v-rowby="'50.50'">
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											<div>
												<div>Text</div>
											</div>
										</div>
										<div class="m-auto d-flex gap-05">
											<bib-icon class="m-auto" icon="plus"></bib-icon>
											<bib-button pop="more">
												<template v-slot:menu>
													<div class="list">
													</div>
												</template>
											</bib-button>
										</div>
									</div>
							</div>
							<div class="conversation__team__row">
								<!-- BIB ITEM REPLACEMENT -->
									<div class="bg-white m-auto rounded m-05 height-2 width-item" v-rowby="'25.75'">
										<div class="mr-auto d-flex pl-05">
											<bib-avatar class="m-auto shape-circle" :src="profile.img"></bib-avatar>
										</div>
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											<div>
												<div>Fname Lname</div>
											</div>
										</div>
										
									</div>
							</div>
							<div class="conversation__team__row">
								<!-- BIB ITEM REPLACEMENT -->
									<div class="bg-white m-auto rounded m-05 height-2 width-item" v-rowby="'25.75'">
										<div class="mr-auto d-flex pl-05">
											<bib-avatar class="m-auto shape-circle" :src="profile.img"></bib-avatar>
										</div>
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											<div>
												<div>Fname Lname</div>
											</div>
										</div>
										
									</div>
							</div>
							<div class="conversation__team__row">
								<!-- BIB ITEM REPLACEMENT -->
									<div class="bg-white m-auto rounded m-05 height-2 width-item" v-rowby="'25.75'">
										<div class="mr-auto d-flex pl-05">
											<bib-avatar class="m-auto shape-circle" :src="profile.img"></bib-avatar>
										</div>
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											<div>
												<div>Fname Lname</div>
											</div>
										</div>
										
									</div>
							</div>
						</div>
						<div class="conversation__container">
							<div class="conversation__container__header">
								<bib-input img="/img/avatar.png" placeholder="Send message to a team or @team_member"></bib-input>
								<div class="conversation__container__header__conversation">
									<span>Conversation</span>
								</div>
							</div>
							<div class="conversation__container__body">
								<template v-for="(chat, key) in chats">
									<bib-chat
										:img="chat.img"
										:text="chat.text"
										:date="chat.date"
										:dir="chat.dir"
										:key="key"
									>
									</bib-chat>
								</template>
							</div>
						</div>
					</div>
				</div>

				<!-- CALENDAR TAB -->
				<div class="calendar"  :data="calendar" v-if="activeTab=='Calendar'">

					<bib-toolbar></bib-toolbar>

					<div class="calendar__content">
						<template v-for="(weekname, key) in calendar.weekdays">
							<template  v-if="!weekname.weekend">
								<div :key="key" class="calendar__content__dayname">{{weekname.name}}</div>
							</template>
							<div class="calendar__content__weekend" v-else>
								<div :key="key" class="calendar__content__dayname">{{weekname.name}}</div>
							</div> 
						</template>
						<template v-for="(day, index) in calendar.days">
							<div :key="index" class="calendar__content__day__weekend" v-if="day.weekend">
								<div class="calendar__content__day__header">
									{{day.header}}
									<div class="calendar__content__day__controls">
										<bib-icon icon="plus" :scale="1.5"></bib-icon>
										<bib-icon icon="more" :scale="1.5"></bib-icon>
									</div>
								</div>
							</div>
							<div class="calendar__content__day"  v-else>
								<div class="calendar__content__day__header">
									{{day.header}}
									<div class="calendar__content__day__controls">
										<bib-icon icon="plus" :scale="1.5" class="justify-end"></bib-icon>
										<bib-icon icon="more" :scale="1.5" class="justify-end"></bib-icon>
									</div>
								</div>
								<div class="calendar__content__day__block">
									<template v-if="day.card">
										<bib-card :card="day.card"></bib-card>
										<br>
										<bib-card :card="day.card"></bib-card>
										<br>
										<bib-card :card="day.card"></bib-card>
									</template>
									<template v-if="day.button">
										<bib-button :size="day.button.size" :label="day.button.label" /> 
									</template>
								</div>
							</div>
						</template>
					</div>
				</div>

				<!-- TIMELINE TAB -->
				<div class="timeline" v-if="activeTab=='Timeline'">
					<div class="timeline__side-header">

					</div>

					<div class="timeline__header">
						<bib-toolbar></bib-toolbar>
					</div>
					<div class="timeline__sidebar">
						<div class="timeline__content__header">
							<h4 class="bold">Label</h4>
							<bib-icon icon="more" class="justify-end"></bib-icon>
						</div>
						<div v-for="(row,key) in timelineRows" class="timeline__content__cell timeline__content__cell--sidebar">
							<details :key="key"> 
								<summary class="p-05">
									<div>Label</div>
								</summary>
								<div></div>
							</details>
						</div>

						<div class="timeline__content__add--cell timeline__content__cell--sidebar">
							<!-- BIB ITEM REPLACEMENT -->
									<div @click="addTimelineRow" class="cursor-pointer bg-white p-1 m-auto rounded m-05 height-2 width-item" v-rowby="'25.75'">
										<div class="mr-auto d-flex gap-05">
											<bib-icon class="m-auto" icon="plus"></bib-icon>
										</div>
										<div class="of-hidden text-wrap mt-auto mb-auto"> 
											<div>
												<div>Add Row</div>
											</div>
										</div>
										
									</div>
						</div>
					</div>	
					<div class="timeline__content" :class="timelineStyle">
						<div :class="day.weekend ? 'timeline__content__cell--weekend' : ''" class="timeline__content__cell" v-for="(day,key) in calendar.days" :key="key" >
							<div class="timeline__content__header">
								{{day.header}}
							</div>

							<div v-for="(row, key) in timelineRows" :key="key">
								<template v-for="(item, key) in row.items">
									<template v-if="item != null && day.header == item.begin">

										<div v-if="timelineType == 'weeks'" class="position-absolute peak cursor-pointer bg-white p-1 m-auto rounded m-05 height-3 width-item" v-rowby="'25.75'">
											<div class="mr-auto d-flex gap-05">
												<bib-avatar class="m-auto shape-circle" :src="item.avatar.img" :width="2.5" :height="2.5"></bib-avatar>
											</div>
											<div class="of-hidden text-wrap mt-auto mb-auto"> 
												<div>
													<div>{{item.label}}</div>
												</div>
											</div>

										</div>
										<div v-if="timelineType == 'days'" class="position-absolute peak cursor-pointer bg-white p-1 m-auto rounded m-05 height-3 width-item" v-rowby="'25.75'">
											<div class="mr-auto d-flex gap-05">
												<bib-avatar class="m-auto shape-circle" :src="item.avatar.img" :width="2.5" :height="2.5"></bib-avatar>
											</div>
											<div class="of-hidden text-wrap mt-auto mb-auto"> 
												<div>
													<div>{{item.label}}</div>
												</div>
											</div>

										</div>
										</template>
								</template>
							</div>
						</div>
					</div>

				</div>					
						<!-- FILE TAB -->
						<div v-if="activeTab=='Files'">
							<bib-toolbar></bib-toolbar>
										<div class="files">
											<div class="p-05">
												<details class="exempt" open>
													<summary class="p-05">
														<div v-rowby="'75.25'">
															<div>Folders</div>
															<div class="justify-end">
																<bib-icon :scale="1.5" icon="more"></bib-icon>
															</div>
														</div>
													</summary>

													<div v-click-outside="clearDragged" class="files__section gap-2">
														<draggable class="folder__area drag-area" v-for="(folder, key) in folders" :key="key" v-bind="filesDragOptions"  :move="folderDragged" :list="folders" >      
																<!-- BIB ITEM REPLACEMENT -->
														<div @contextmenu="contextMenuItem($event)" class="bg-white m-auto rounded m-05 p-05 height-3 width-item" v-rowby="'25.75'">
															<div class="m-auto d-flex gap-05">
																<bib-icon class="m-auto" :scale="2.5" :icon="folder.icon"></bib-icon>
															</div>
															<div class="of-hidden text-wrap mt-auto mb-auto"> 
																<div>
																	<div>{{folder.label}}</div>
																</div>
															</div>
														</div>
															<template v-slot:footer>
																<nested-draggable v-if="folder.files"  :tasks="folder.files"></nested-draggable>
															</template>
														</draggable>  
													</div>
												</details>
											</div>
											<div class="p-1">
												<details class="exempt" open>
													<summary>
														<div>Files</div>
													</summary>
													<draggable class="files__section gap-2" v-bind="filesDragOptions" :list="files" :move="fileMoved">
														<div v-for="(file, key) in files" class="mr-05">
																<div @contextmenu="contextMenuItem($event)" class="bg-white m-auto rounded mr-1 p-05 height-3 width-item" v-rowby="'25.75'">
															<div class="m-auto d-flex gap-05">
																<bib-icon class="m-auto" :scale="2.5" shape="square" :icon="file.icon"></bib-icon>
															</div>
															<div class="of-hidden text-wrap mt-auto mb-auto"> 
																<div>
																	<div>{{file.label}}</div>
																</div>
															</div>
														</div>
														</div>
													</draggable>
												</details>
											</div>

										</div>
									</div>
								</div>
							</div>


</template>

<script>
import BibButton from '../../bib-shared/components/Atoms/BibButton.vue';
import BibIcon from '../../bib-shared/components/Atoms/BibIcon.vue';
import BibDropdown from '../../bib-shared/components/Molecules/BibDropdown.vue';
export default {
  components: { BibButton, BibIcon, BibDropdown },

		name: 'App',
		methods:{
			tabChange(tab) {
				this.activeTab = tab;
			},
			switchViewTimeline(view){
				this.timelineType = view.toLowerCase();
				this.calendar.days = this.days;
				if(this.timelineType == 'quarters'){
					this.calendar.days = this.months;
				} 
			},
			switchViewBoard(view){
				this.boardType = view.toLowerCase();
			},
			addTimelineRow(){
		  		if(this.timelineRows.length < 4){
		  			let row = new Object();
		  			row.id = this.timelineRows[this.timelineRows.length-1].id + 1;

		  			this.timelineRows.push(row);
		  		}
		  	}, 
			addFolder(){
				this.folders.push(this.folders[0]);
			},
			uploadFile(){
			},
			addTask($event,section){
				$event.preventDefault()
				this.$nuxt.$emit('add-task',section);
			},
			likeTask(item){
				item.cells.find((el) => el.name == "liked").value = !item.cells.find((el) => el.name == "liked").value
			},
			getWeeks(){
				if(this.calendar.days){
					let wks = []
					this.calendar.days.forEach(function(element){
						if(element.day == "M"){
							element.label = element.header+" Week";
							element.type = "default";
							wks.push(element);
						}
					})
					return wks;
				}
				return false
			},
			removeOutline($event){
				let items = document.querySelectorAll('[class$="--outlined"]');
				for(let i=0;i< items.length; i++){
					items[i].classList.remove('card--outlined');
				}
				for(let j=0;j<this.sections.length;j++){
					for(let k=0;k<this.sections[j].items.length;k++){
						this.sections[j].items[k].active = false;
					}
				}
			},
			outsideSlider($event){
				var res = true;
				//CLASSES TO EXCLUDE FROM CLOSING SLIDER PROCESS
				let exp = ["control--exp","card","card__content","card__content__label"];
				let show = null;
				for (var i = exp.length - 1; i >= 0; i--) {
					if($event.target.classList.contains(exp[i]) || $event.target.offsetParent.classList.contains(exp[i]) || $event.composedPath().find((el) => (el.classList != null ? el.classList.contains(exp[i]) : null))){
						res = false;
					}
				}

				if(res){
					this.showSlider = false
					this.removeOutline();
				}
			},
			outsidePickers($event,value = false){
				var res = true;
				let pickers = document.querySelectorAll('details.board__view__picker');

				if(value == true){
					for(let i=0;i< pickers.length; i++){
						pickers[i].removeAttribute('open');
					}
				}else{
					for(let i=0;i< pickers.length; i++){
						for(let j=0;j< $event.path.length; j++){
							if($event.path[j].classList){
								if($event.path[j].classList.contains('datepicker')){
									res = false
								}
							}
						}
						if(res){pickers[i].removeAttribute('open');}
					}
				}


			},
			showTablerowInfo(tablerow){
				this.removeOutline();
				if(event.target.parentElement.closest(".datarow")){
					event.target.parentElement.closest(".datarow").classList.add("datarow--active")
				}
				this.itemData = tablerow;    
				this.showSlider = true;
			},
			showItemInfo(item){
				this.removeOutline();
				this.itemData = item;
				item.active = true;
				this.showSlider = true;
			},
			taskChange(item,value){
				item.value = value
			},  
			addColumn(){
				let column = {};
				column.title ="New Column";
				column.items = [];
				this.sections.push(column)
			},
			dateChange(item,value){ 
				item.date = this.months[new Date(value).getMonth()].header+'-'+new Date(value).getDate()+' '+new Date(value).getFullYear();
			},
			userChange(item,value){ 
				item.cells.find((el) => el.name == "assignee").value.name = value.label;
				item.cells.find((el) => el.name == "assignee").value.img = value.img;
			},
			fileMoved(event){
				this.clearDragged()
				if(event.to.classList.contains('folder__area')){
					event.to.classList.add("folder__area--hovered");
				}
			},
			folderDragged(event){
				if(event.to.classList.contains('files__section')){
					return false;
				}  
			},
			clearDragged(){
				var areas = document.getElementsByClassName('folder__area');
				for (var i = areas.length - 1; i >= 0; i--) {
					areas[i].classList.remove('folder__area--hovered');
				}
			},
			contextMenuItem(event){
				event.preventDefault()
				this.showMenu = true;
				var menu = document.getElementById("context__menu");
				if(menu){
					menu.style.position = 'fixed';
					menu.style.left = event.clientX+'px';
					menu.style.top = event.clientY+'px';

				}
			},
		},
		computed:{
			dragOptions() {
				return {
					group: "Items",
				};
			},
			dragOptionsColumn() {
				return {
					group: "Columns",
				};
			},
			filesDragOptions() {
				return {
					group: "Files",
				};
			},
			timelineStyle(){
		  		return{
		  			'timeline__content--weeks': this.timelineType == "weeks",
		  			'timeline__content--quarters': this.timelineType == "quarters",
		  			'timeline__content--days': this.timelineType == "days"
		  		}
		  	}
		},
		data () {
			return {
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
				chats: [
					{
						dir:'direct',
						img: "/img/avatar.png",
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Bruno Goulet labore et dolore magna aliqua. Ut enim ad minim veniam, quis #hashtag exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
						date: "Jan 21 2021 @ 13:45"
					},
					{
						dir:'reply',
						img: "/img/avatar.png",
						text: "Ut enim ad minim veniam, quis #hashtag exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						date: "Jan 21 2021 @ 13:45"
					},
					{
						dir:'direct',
						img: "/img/avatar.png",
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Bruno Goulet labore et dolore magna aliqua. Ut enim ad minim veniam, quis #hashtag exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
						date: "Jan 21 2021 @ 13:45"
					},
				],
				columnMenu: [{
					label: "Opt #1",
					location: false,
					type: "dark"
				},{
					label: "Delete Column",
					location: false,
					type: "danger"
				}],
				cardMenu: [{
					label: "Opt #1",
					location: false,
					type: "dark"
				},{
					label: "Delete",
					location: false,
					type: "danger"
				}],
				users:[
					{
						text : "User #1",
						img:"/img/avatar.png",
					},
					{
						text : "User #2",
						img:"/img/avatar-2.png",
					},
					{
						text : "User #3",
						img:"/img/avatar-3.png",
					},
					{
						text : "User #4",
						img:"/img/avatar-4.png",
					},
				],
				showSlider: false,
				focusInput: false,
				itemData: {},
				folders:[{
					id: 0,
					type: 'rectangle',
					icon : 'folder',
					label : "Folder 01",
					desc:"",
					size:"lg",
					files:[]
				},
				{
					id: 1,
					type: 'rectangle',
					icon : 'folder',
					label : "Folder 02",
					desc:"",
					size:"lg",
					files:[]
				},
				{
					id: 2,
					type: 'rectangle',
					icon : 'folder',
					label : "Folder 03",
					desc:"",
					size:"lg",
					files:[]
				},
				{
					id: 3,
					type: 'rectangle',
					icon : 'folder',
					label : "Folder 04",
					desc:"",
					size:"lg",
					files:[]
				}],
				files:[{
					id: 0,
					type: 'circle',
					icon : 'circle',
					label : "File",
					desc:"",
					size:"lg",
				},
				{
					id: 1,
					type: 'circle',
					icon : 'circle',
					label : "File C",
					desc:"",
					size:"lg"
				},
				{
					id: 2,
					type: 'rectangle',
					icon : 'rectangle',
					label : "File A",
					desc:"",
					size:"lg"
				},
				{
					id: 3,
					type: 'circle',
					icon : 'circle',
					label : "File B",
					desc:"",
					size:"lg"
				},
				{
					id: 4,
					type: 'circle',
					icon : 'circle',
					label : "File 5",
					desc:"",
					size:"lg"
				},
				{
					id: 5,
					type: 'rounded',
					icon : 'rectangle',
					label : "File 6",
					desc:"",
					size:"lg"
				},
				{
					id: 6,
					type: 'rounded',
					icon : 'rectangle',
					label : "File 7",
					desc:"",
					size:"lg"
				},
				{
					id: 7,
					type: 'rounded',
					icon : 'rectangle',
					label : "File 8",
					desc:"",
					size:"lg"
				},
				{
					id: 8,
					type: 'rounded',
					icon : 'rectangle',
					label : "File 9",
					desc:"",
					size:"lg"
				}],
				sections:[{
					title: "Title 1",
					items:[{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 1},
			        	{name : 'type', value: "task"},
			        	{name : 'liked', value: true},
			        	{name : 'task', value:{label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"primary", label:"In-Progress", digits:75}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 56},
			        	{name : 'type', value: "file"},
			        	{name : 'icon', value: "rectangle"},
			        	{name : 'liked', value: true},
			        	{name : 'src', value: "/file/source.name"},
			        	{name : 'label', value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"primary", label:"In-Progress", digits:75}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 2},
			        	{name : 'liked', value: true},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Build UI library", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"success", label:"Complete", digits:100}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 3},
			        	{name : 'liked', value: true},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Build UI library", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"primary", label:"In-Progress", digits:75}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]}],
				},
				{
					title: "Title 2",
					items:[{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 56},
			        	{name : 'type', value: "file"},
			        	{name : 'liked', value: true},
			        	{name : 'icon', value: "folder"},
			        	{name : 'src', value: "/file/source.name"},
			        	{name : 'label', value: "Folder name"},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"primary", label:"In-Progress", digits:75}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 1},
			        	{name : 'liked', value: false},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"primary", label:"In-Progress", digits:75}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 2},
			        	{name : 'liked', value: false},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Build UI library", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"success", label:"Complete", digits:100}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 3},
			        	{name : 'liked', value: false},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Build UI library", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"warning", label:"On-Hold", digits:25}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]}],
				},
				{
					title: "Title 3",
					items:[{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 1},
			        	{name : 'liked', value: false},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"primary", label:"In-Progress", digits:75}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 2},
			        	{name : 'liked', value: true},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Build UI library", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"success", label:"Complete", digits:100}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]},{
			        	active: false,
			        	cells:[
			        	{name : 'id', value: 3},
			        	{name : 'liked', value: false},
			        	{name : 'type', value: "task"},
			        	{name : 'task', value:{label: "Build UI library", check: false}},
			        	{name : 'project', value: "BIB Library"},
			        	{name : 'priority', value: {class:"primary", label:"Low Priority"}},
			        	{name : 'status', value: {class:"warning", label:"On-Hold", digits:25}},
			        	{name : 'assignee', value: {img:"/img/avatar-2.png",name:"Jordan Bennedict"}},
			        	{name : 'date', value: "Mar-11"},
			        	{name : 'time', value: "4"},
			        	{name : 'budget', value: "4000"},
			        	{name : 'rows', value: []}
			        	]}],
				},
				{
					title: "Title 4",
					items:[],
				}],
				tabs:["List", "Board", "Timeline", "Calendar","Conversation","Files"],
				activeTab: "List",
				timelineType: "weeks",
				boardType: "kanban",
				months:[{
					header: "Jan",
				},
				{
					header: "Feb",                    
				},
				{
					header: "Mar",                    
				},
				{
					header: "Apr",                    
				},
				{
					header: "May",                    
				},
				{
					header: "Jun",                    
				},
				{
					header: "Jul",                    
				},
				{
					header: "Aug",                    
				},
				{
					header: "Sep",                    
				},
				{
					header: "Oct",                    
				},
				{
					header: "Nov",                    
				},
				{
					header: "Dec",                    
				}],
				days:[{
					header: "1",
					day: "M",
					weekend: false
				},
				{
					header: "2",                
					day: "T",
					weekend: false,

				},
				{
					header: "3",
					day: "W",
					weekend: false
				},
				{
					header: "4",
					day: "T",
					weekend: false
				},
				{
					header: "5",
					day: "F",
					weekend: false,
					button:{
						label:"Add Reminder",
						icon: "plus",
						size:"lg"
					}
				},
				{
					header: "6",
					day: "S",
					weekend: true

				},
				{
					header: "7",
					day: "S",
					weekend: true
				},
				{
					header: "8",
					day: "M",
					weekend: false
				},
				{
					header: "9",
					day:"T",
					weekend: false
				},
				{
					header: "10",
					day: "W",
					weekend: false,
					button:{
						label:"Add Task",
						icon: "plus",
						size:"lg"
					}
				},
				{
					header: "11",
					day: "T",
					weekend: false
				},
				{
					header: "12",
					day: "F",
					weekend: false
				},
				{
					header: "13",
					day:"S",
					weekend: true
				},
				{
					header: "14",
					day: "S",
					weekend: true
				},
				{
					header: "15",
					day: "M",
					weekend: false
				},
				{
					header: "16",
					weekend: false,
					day: "T"
				},
				{
					header: "17",
					weekend: false,
					day: "W"
				},
				{
					header: "18",
					day: "T",
					weekend: false
				},
				{
					header: "19",
					day: "F",
					weekend: false
				},
				{
					header: "20",
					day: "S",
					weekend: true
				},
				{
					header: "21",
					day: "S",
					weekend: true
				},
				{
					header: "22",
					day:"M",
					weekend: false
				},
				{
					header: "23",
					day:"T",
					weekend: false
				},
				{
					header: "24",
					day: "W",
					weekend: false
				},
				{
					header: "25",
					day: "T",
					weekend: false
				},
				{
					header: "26",
					day:"F",
					weekend: false
				},
				{
					header: "27",
					day: "S",
					weekend: true
				},
				{
					header: "28",
					day: "S",
					weekend: true
				},
				{
					header: "29",
					day: "M",
					weekend: false
				},
				{
					header: "30",
					day: "T",
					weekend: false
				},
				{
					header: "31",
					day: "W",
					weekend: false
				},
				{
					header: "1",
					day: "T",
					weekend: false
				},
				{
					header: "2",
					day: "F",
					weekend: false
				},
				{
					header: "3",
					day: "S",
					weekend: true
				},
				{
					header: "4",
					day: "S",
					weekend: true
				}],
				 columns: [{
			          name:"task",
			          label: "Task Name",
			          width: "auto",
			          controls:[{
			          	label:"Insert column left",
			          	action: "insert-before",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Insert column right",
			          	action: "insert-after",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Sort A->Z",
			          	action: "project",
			          	direction: "asc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Sort Z->A",
			          	action: "project",
			          	direction: "desc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Remove column",
			          	action: "delete-column",
			          	to: "#",
			          	variant: "dark"}]
			        },
			        {
			          name: "project",
			          label: "Project",
			          width: "23%",
			          controls:[{
			          	label:"Insert column left",
			          	action: "insert-before",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Insert column right",
			          	action: "insert-after",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Sort A->Z",
			          	action: "project",
			          	direction: "asc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Sort Z->A",
			          	action: "project",
			          	direction: "desc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Remove column",
			          	action: "delete-column",
			          	to: "#",
			          	variant: "dark"},
			          	]
			      },
			        {
			          name: "priority",
			          label: "P",
			          width: "2.5%",
			          controls:[{
			          	label:"Insert column left",
			          	action: "insert-before",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Insert column right",
			          	action: "insert-after",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Sort A->Z",
			          	action: "project",
			          	direction: "asc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Sort Z->A",
			          	action: "project",
			          	direction: "desc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Remove column",
			          	action: "delete-column",
			          	to: "#",
			          	variant: "dark"}]
			      },
			        {
			          name: "status",
			          label: "S",
			          width: "2.5%",
			          controls:[{
			          	label:"Insert column left",
			          	action: "insert-before",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Insert column right",
			          	action: "insert-after",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Sort A->Z",
			          	action: "project",
			          	direction: "asc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Sort Z->A",
			          	action: "project",
			          	direction: "desc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Remove column",
			          	action: "delete-column",
			          	to: "#",
			          	variant: "dark"}]
			      },
			        {
			          name: "assignee",
			          label: "A",
			          width: "2.5%",
			          controls:[{
			          	label:"Insert column left",
			          	action: "insert-before",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Insert column right",
			          	action: "insert-after",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Sort A->Z",
			          	action: "project",
			          	direction: "asc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Sort Z->A",
			          	action: "project",
			          	direction: "desc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Remove column",
			          	action: "delete-column",
			          	to: "#",
			          	variant: "dark"}]
			      },
			        {
			          name: "date",
			          label: "Due-Date",
			          width: "17%",
			          controls:[{
			          	label:"Insert column left",
			          	action: "insert-before",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Insert column right",
			          	action: "insert-after",
			          	to: "#",
			          	icon: "plus",
			          	variant: "dark"},
			          	{
			          	label:"Sort A->Z",
			          	action: "project",
			          	direction: "asc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Sort Z->A",
			          	action: "project",
			          	direction: "desc",
			          	to: "#",
			          	variant: "dark"},
			          	{
			          	label:"Remove column",
			          	action: "delete-column",
			          	to: "#",
			          	variant: "dark"}]
			      }],
				views:[{
					label: "Weeks",
					location: false,
					type: "dark"
				},
				{
					label: "Quarters",
					location: false,
					type: "dark"
				},
				{
					label: "Days",
					location: false,
					type: "dark"
				}],
				viewsBoard:[{
					label: "Horizontal",
					location: false,
					type: "dark"
				},
				{
					label: "Kanban",
					location: false,
					type: "dark"
				}],
				filters:[{
					label: "None",
					location: false,
					type: "dark"
				},
				{
					label: "Assignee",
					location: false,
					type: "dark"
				},
				{
					label: "Date",
					location: false,
					type: "dark"
				},
				{
					label: "Department",
					location: false,
					type: "dark"
				},
				{
					label: "Favorites",
					location: false,
					type: "dark"
				},
				{
					label: "Name",
					location: false,
					type: "dark"
				},
				{
					label: "Priority",
					location: false,
					type: "dark"
				},
				{
					label: "Project",
					location: false,
					type: "dark"
				},{
					label: "Status",
					location: false,
					type: "dark"
				}],
				sorts:[
				{
					label: "Assignee",
					location: false,
					type: "dark"
				},
				{
					label: "Date",
					location: false,
					type: "dark"
				},
				{
					label: "Department",
					location: false,
					type: "dark"
				},
				{
					label: "Favorites",
					location: false,
					type: "dark"
				},
				{
					label: "Priority",
					location: false,
					type: "dark"
				},
				{
					label: "Project",
					location: false,
					type: "dark"
				},{
					label: "Status",
					location: false,
					type: "dark"
				}],
				links : [{
					label: "Home",
					location: false,
					type: "default",
					to:"#"
				},
				{
					label: "Departement",
					location: false,
					type: "default",
					to:"#"
				},
				{
					label: "Project Name",
					location: true,
					type: "dark",
					to:"#"
				}],
				calendar:{
					label: "May 2021",
					days: [],
					month:"May",
					weekdays:[{
						name: "Monday",
						weekend: false
					},
					{
						name: "Tuesday",
						weekend: false
					},
					{
						name: "Wednesday",
						weekend: false
					},{
						name: "Thursday",
						weekend: false
					},
					{
						name:"Friday",
						weekend: false
					},{
						name: "Sat",
						weekend: true
					},{
						name: "Sun",
						weekend: true
					}],
				},
				showMenuFiles: false,
				itemMenuFiles: [{
					label: 'Edit File',
					type : "default"
				},
				{
					label: 'Preview File',
					type : "default"
				},
				{
					label: 'Delete File',
					type : "danger"
				}],
				timelineRows: [{
					items:[{
						id: 0,
						label:"Task over 8 days",
						begin: 7,
						month: "May",
						span: 8,
						avatar:{
							type: "circle",
							img: "/img/avatar.png"
						}
					},
					{
						id: 1,
						label:"Task over 6 days",
						begin: 22,
						month: "May",
						span: 6,
						avatar:{
							type: "circle",
							img: "/img/avatar.png"
						}
					}]
				}],
				profile: {
		        type: "circle",
		        img: "/img/avatar.png",
		      }
			}
		},
created(){
	this.$nuxt.$on('close-side-panel', (event) => {
		this.showSlider = false
	}),
  this.$nuxt.$on('add-task', (section) => {
	  let row = {};
      row.cells = [];
      row.active = true;

      let id = {};
      id.value = Math.floor(Math.random());
      id.name = "id";
      row.cells.push(id);

      let task = {};
      task.value = { check: false, label: "New Task" };
      task.name = "task";
      row.cells.push(task);

      let type = {};
      type.value = "task";
      type.name = "type";
      row.cells.push(type);

      let liked = {};
      liked.value = false;
      liked.name = "liked";
      row.cells.push(liked);

      let budget = {};
      budget.value = "0";
      budget.name = "budget";
      row.cells.push(budget);

      let time = {};
      time.value = "0";
      time.name = "time";
      row.cells.push(time);

      let project = {};
      project = "Select Project";
      let procell = {};
      procell.name = "project";
      procell.value = project;
      row.cells.push(procell);

      let priority = {};
      priority.class = "primary";
      priority.label = "Low Priority";
      let priocell = {};
      priocell.value = priority;
      priocell.name = "priority";
      row.cells.push(priocell);

      let status = {};
      status.class = "warning";
      status.label = "On Hold";
      let statucell = {};
      statucell.value = status;
      statucell.name = "status";
      row.cells.push(statucell);

      let assignee = {};
      assignee.img = "/img/avatar.png";
      assignee.name = "Catherine Labelle";
      let user = {};
      user.value = assignee;
      user.name = "assignee";
      row.cells.push(user);

      let date = {};
      date.value = "Mar-1";
      date.name = "date";
      row.cells.push(date);


      let rows = [];
      let rowscell = {};
      rowscell.name = "rows";
      rowscell.value = rows;
      row.cells.push(rowscell);

	this.sections[section].items.push(row);
	this.focusInput = true;
	this.showItemInfo(row)
}),
this.$nuxt.$on('task-val-changed', ($event,section) => {
	this.addTask($event,section)
}),
this.$nuxt.$on('close-picker', (e) => {
   this.outsidePickers(e,true)
})
},
mounted(){
	this.getWeeks();
		this.calendar.days = this.days;
	}
}
</script>
<style lang="scss" scoped>
@import '~/../bib-shared/css/variables.scss';
@import '~/../bib-shared/css/mixins.scss';
@import '~/../bib-shared/css/colors.scss';


*{
	font-family: 'Lato';
}
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

.list {
	flex-direction: row;
	height: 100%;
	background-color: $light;
	&__
	.item{
		align-items: center;
	}

	&__header {
		display: flex;
		.button{
		 padding-left: 1rem;
	 }
	 &-side {
		width: 100%;
		display: flex;
		align-items:center;
		border-top: 1px solid $gray1;
	}
	&-action {
		margin-left: auto;
		display: flex;
		justify-content: space-between;
		max-height: $item-height;

	  .calendar__header {
		  border-bottom: none;
	  }
  }
}

&__table {
	height: calc(100vh - #{$item-height *2.5});
  &__row {
	&__table {
	  margin: 0;
  }
}
}

&__slider{
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  .task-card{
   height: 100%;
}
}
}
.datarow{
  border: 1px solid transparent;
	  &--active{
		  &:hover{
			border: 1px solid $black !important;
		}
	}
	&:not(&--header){

		  &:hover{
			border: 1px solid $gray1;
		}
		&:active{
			border: 1px solid $black;
		}
		&:focus{
			border: 1px solid $black;
		}
	}
}
.card{
	width: 100%;
	&--big{
		height: 100%;           
	}
	&--shrink{
		width: 18rem;
	}
	&--small{
		width: 40%;
		margin: auto;
	}
	&--md{
		display: inline-grid;
		grid-template-columns: auto auto auto auto;
		grid-gap: 2rem;
	}
	&.horizontal{
		flex-direction: row;
	}
	&.noflx{
		display: block;
	}
}
.outlineW{
	padding: 1rem;
	border: 1px solid $white;
}
.outlineB{
	padding: 1rem;
	border: 1px solid $black;
}
.main{
	width: calc(100% - (#{$item-height} * 1.8) );
	height: 100%;
	display: grid;
	position: absolute;
	top: 4rem;
	overflow: hidden;
	left: $item-height * 1.8;
	background-color: white;
	grid-template-rows: 2.5rem 2.5rem 100%;

	.menu{
		padding: 0 1rem 0 .25rem;        
	}
	.bread{
		padding: 0 .15rem 0 .15rem;
		display: grid;
		grid-template-columns: 2rem auto;
		line-height: 1.8rem;
	}
}

.card{
	&.sortable-chosen{
		border-color: $primary;
		border-width: 2px;
		background: lighten($primary,50%);
		color: $black;
		filter: opacity(0.65);
		border-style: dashed;
	}
}
.sortable-ghost{
	.item__section__header{
		border-color: transparent !important;
		background: transparent !important;
	}
	.card{
		border-color: $primary;
		border-width: 2px;
		background: lighten($primary,50%);
	color: $black;
	filter: opacity(0.65);
	border-style: dashed;
}
}
.board__view{
	$self : &;
	position: relative;
	background: $light;
	&__content{
		border-top: 1px solid transparent;
		width: $item-width + 3.2rem;
		&:hover{
			&__header {
				span{
					@extend .display !optional
			}
		}
		}
		&.sortable-ghost{
			border-color: $primary;
			border-style: dashed;
			border-right: 0;
			border-bottom: 0;
			color: $primary;
			border-left: 0;
			background: lighten($primary,57%);
		}
		&__header{
			display: flex;
			justify-content: space-between;
			max-height: $item-height * 1.2;
			height: 100%;

			span{
				display: flex;
				padding:0 1.5rem 0 .25rem;
			}
			.avatar{
				cursor: pointer;
				margin: auto .75rem auto 0;

			}
		}

	}
	&__picker{
		position: relative;
		&__zone{
			position: absolute;

			&--right{
				right: -3rem;
				top: 2.5rem;
				&:before{
					right: 23%;
				}
			}
			&--left{
				margin-left: -.5rem;
				margin-top: .5rem;
				&:before{
					left: 6%;
				}
			}
			&:before{
				position: absolute;
				top: -0.45rem;
				width: calc(1rem - 1px);
				z-index: 9;
				height: calc(1rem - 1px);
				content: "";
				border-left: 1px solid black;
				border-top: 1px solid black;
				transform: rotate(45deg);
				background: white;
			}
		}
		&__trigger{
			font-weight: 400;
			position: relative;
			&:before{display: none;}
			display: flex;
			flex-direction: column-reverse;
		}

	}
	&--horizontal{
		display: grid;
		grid-template-columns: auto;
		max-height: 2.5 * $item-width;
		overflow: scroll;

		#{ $self }__section{
			width: 100%;
		}
		#{ $self }__content{
			display: grid;
			grid-template-columns: repeat(4, ($item-width + 3.2rem));
			row-gap: 1.5rem;    
			justify-content: flex-start;
			padding: 0 1.25rem;
			align-items: flex-start;
			padding-bottom: 1.5rem;
			.drag-area{
				width: $item-width;
				height: 100%;
			}
			.card{
				margin: 1.5rem auto;
				max-width: $item-width;
				cursor: pointer;
			}
		}

	}
	&--kanban{
		display: grid;
		grid-template-columns: repeat(5, ($item-width + 3.2rem));   
		grid-auto-flow: column; 
		@include scrollbars(.25rem, $gray1, transparent);
		overflow-x: scroll;
		overflow-y: hidden;
		width: calc(100vw - (#{$item-height} * 1.6));
		height: 100%;

		#{ $self }__content__items{
			width: ($item-width + 3.2rem);
			overflow-y: scroll;
			overflow-x: hidden;
			@include scrollbars(.25rem, $gray1, transparent);
			height: calc(100vh - (#{$item-height} * 6.3));

			.card{
				margin: 1rem auto;
				max-width: $item-width;
				cursor: pointer;
				&:first-child{
					margin-top: 0;
				}
			}
		}
		#{ $self }__content:hover{
			border-top: 1px solid $black;
			background: lighten($light, 1.3%);
		}
	}
	&__slider{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		.task-card{
			height: 100%;
		}
	}
}
.calendar{
	background-color: $light;

	&__content{ 
		$self : &;
		display: grid;
		background: $light;
		grid-template-columns: auto auto auto auto auto ($item-height*2) ($item-height*2);
		&__dayname{
			padding: .5rem 1rem;
			border-bottom: 1px solid $gray1;
			color: $gray1;

			&:not(&__weekend),&:not(:first-child){
				border-right: 1px solid $gray1;
			}
		}
		&__weekend{
			text-align: left;       
			background: $gray2;  
			color: $gray1;

			#{ $self }__day{
				min-width: ($item-height *2);
			}
		}
		&__day{
			border-right: 1px solid $gray1;
			border-bottom: 1px solid $gray1;
			height: $item-height * 5.75;
			display: grid;
			grid-template-rows: $item-height auto;

			&:hover{
				// outline: 1px solid $color-dark;
				#{ $self }__day__header{
					border-top:1px solid $gray1;
					border-right:1px solid $gray1;
					border-left:1px solid $gray1;
				}
				#{ $self }__day__block{
					border-right:1px solid $gray1;
					border-left:1px solid $gray1;
					border-bottom:1px solid $gray1;
				}
				#{ $self }__day__controls{
					visibility: visible;
					-webkit-transition: visibility 0.025s ease;
					transition:  visibility 0.025s ease;
				}
			}
			&__header{
				height: $item-height;
				padding: 0 1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom:  1px solid $gray1;
				border-top:1px solid transparent;
				border-right:1px solid transparent;
				border-left:1px solid transparent;
			}
			&__controls{
				visibility: hidden;
				display: flex;
				justify-content: center;
				grid-gap: .25rem;
			}
			&__block{
				padding: .5rem;
				overflow-y: scroll;
				overflow-x: hidden;
				text-align: center;
				border-right:1px solid transparent;
				border-left:1px solid transparent;
				border-bottom:1px solid transparent;

				@include scrollbars(.25rem, $gray1, transparent);
			}
			&:not(&__weekend){
				min-width: $item-height * 6.66;
			}
			&__weekend{ 
				background: $gray2;  
				color: $gray1;
				border-right: 1px solid $gray1;
				border-bottom: 1px solid $gray1;   
				width: $item-height * 2;
				#{ $self }__day__controls{
					display: none;
				}
				#{ $self }__day__header{
					justify-content: center;
				}
			}
		}
	}
	&__weekend{
		display: grid;
		grid-template-columns: ($item-height *2) ($item-height *2);
	}
}
.conversation {
	display: flex;
	border-top: 1px solid $gray1;
	height: 100%;
	&__sidebar {
		width: 248px;
		background-color: $white;
	}
	&__container {
		width: 100%;
		background-color: $light;
		padding: 2.5rem 9.5rem 0 9.5rem;

		&__header {
			padding: 0 1rem;

			&__conversation {
				margin-top: 2rem;
				margin-bottom: 2rem;
				font-size: 1rem;
				color: $dark;
			}
		}

		&__body {
			padding: 0 1rem;
			overflow-y: scroll;
			overflow-x: hidden;
			margin-right: .15rem;
			@include scrollbars(.25rem, $gray1, transparent);
			height: 42rem;
		}
	}
	&__team__row {
	  border-bottom: 1px solid $gray1;
  }
}
.files{
	background: $light;
	height: 100%;
	&__section{
		width: calc(100vw - 5vw);
		display: grid;
		grid-template-columns: repeat(5, $item-width);   
		padding: 1rem;
	}
}
.folder{
	&__files{
		margin-left: 1.5rem;
		height: max-content;
		overflow-y: scroll;
	}
	&__area{
		border: 1px solid transparent;
		&--hovered{
			border: 1px solid $primary;
			background-color:  lighten($primary,55%);
border-style: dashed;
}
}
}
.timeline{
	display: grid;
	flex-direction: row;
	grid-template-columns: ($item-width - 1rem) auto;
	height: 100%;
	background-color: $light;
	grid-template-rows: $item-height*1.2 auto;

	$time: &;

	&__side-header{
		padding: 0 1rem;
		border-top: 1px solid $gray1;
		display: flex;
		align-items:center;
		border-right: 1px solid $black;
	}
	&__sidebar{
		display: grid;
		min-width: $item-width - $item-height;
		max-height: $item-width;
		overflow: scroll;
		background-color: $white;
		border-right: 1px solid $black;
		grid-template-rows: $item-height repeat(auto-fill, $item-height*1.5);

		#{$time}__content__cell{
			border-right: 0;
			line-height: 1.8;
		}
		#{$time}__content__header{
			flex-direction: row;
			padding: .5rem;
			justify-content: space-between;
		}
	}
	&__header{
		display: flex;
		max-height: $item-height;

		
	}
	&__content{
		max-height: $item-width;
		grid-auto-flow: column;
		display: grid;
		$self: &;
		&--weeks{
			grid-template-columns: auto repeat(34, auto);

		}
		&--quarters{
			grid-template-columns: auto repeat(4, auto);
			#{ $self }__cell{
				width: $item-width - 1rem;
			}
		}
		&--days{
			grid-template-columns: auto repeat(20, auto);
			#{ $self }__cell{
				width: $item-height * 1.5;
			}
		}
		min-width: $item-height;
		text-overflow: hidden;
		overflow: scroll;

		&__header{
			// border-right: 1px solid $color-gray;
			border-bottom: 1px solid $gray1;
			display: flex;
		    flex-direction: column;
		    justify-content: center;
		    text-align: center;
		}
		
		&__cell{
			min-width: $item-height;
			display: grid;
			&:not(&--sidebar){
				position: relative;
				height: $item-width;
				&:nth-child(7n){
						border-right: 1px solid $black;
				}
				border-right: 1px solid $gray1;
				border-bottom: 1px solid $gray1;

				grid-template-rows: $item-height repeat(auto-fill,$item-height*1.5);
			}
			$self: &;	
			&--sidebar{
				border-bottom: 1px solid $gray1;

			}
			&--weekend{
				background: $gray2;	
				color: $gray1;
			}
		
			
		}
	}
	&__slider{
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		z-index: 2;
		.task-card{
			height: 100%
		}
	}
}
</style>