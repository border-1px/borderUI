import HomeView from './views/home.vue'
import ButtonView from './views/button.vue'
import ButtonGroupView from './views/button_group.vue'
import PickerView from './views/picker.vue'
import DemoView from './views/demo.vue'
import NavbarView from './views/navbar.vue'
import SwitchView from './views/switch.vue'
import DialogView from './views/dialog.vue'
import CheckboxView from './views/checkbox.vue'
import RadioView from './views/radio.vue'
import CellView from './views/cell.vue'
import SwipeView from './views/swipe.vue'
import TabbarView from './views/tabbar.vue'
import UploaderView from './views/uploader.vue'
import PopupView from './views/popup.vue'
import IconView from './views/icon.vue'
import ToolbarView from './views/toolbar.vue'
import TableView from './views/table.vue'
import ActionSheetView from './views/action-sheet.vue'
import DebounceView from './views/debounce.vue'
import TableRenderView from './views/table-render.vue'
import TimeLineView from './views/timeline.vue'
import TableSlotView from './views/table-slot.vue'
import TableRenderSlotView from './views/table-render-slot.vue'

const routers = [
  {
    path: '/demo',
    name: 'demo',
    component: DemoView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { index: 1 }
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView
  },
  {
    path: '/button_group',
    name: 'button_group',
    component: ButtonGroupView
  },
  {
    path: '/picker',
    name: 'picker',
    component: PickerView
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: NavbarView
  },
  {
    path: '/switch',
    name: 'switch',
    component: SwitchView
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: DialogView
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: CheckboxView
  },
  {
    path: '/radio',
    name: 'radio',
    component: RadioView
  },
  {
    path: '/cell',
    name: 'cell',
    component: CellView
  },
  {
    path: '/swipe',
    name: 'swipe',
    component: SwipeView
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: TabbarView
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: UploaderView
  },
  {
    path: '/popup',
    name: 'popup',
    component: PopupView
  },
  {
    path: '/icon',
    name: 'icon',
    component: IconView
  },
  {
    path: '/toolbar',
    name: 'toolbar',
    component: ToolbarView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/action-sheet',
    name: 'action-sheet',
    component: ActionSheetView
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: DebounceView
  },
  {
    path: '/table-render',
    name: 'table-render',
    component: TableRenderView
  },
  {
    path: '/table-slot',
    name: 'table-slot',
    component: TableSlotView
  },
  {
    path: '/table-render-slot',
    name: 'table-render-slot',
    component: TableRenderSlotView
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: TimeLineView
  }
]
export default routers
