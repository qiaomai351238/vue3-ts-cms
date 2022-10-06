import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElLink,
  ElCheckbox,
  ElHeader,
  ElMain,
  ElAside,
  ElTable,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElPagination,
  ElRow,
  ElSelect,
  ElTableColumn,
  ElSubMenu,
  ElIcon
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElIcon,
  ElLink
]

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
