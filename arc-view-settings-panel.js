import { PolymerElement } from '../../@polymer/polymer/polymer-element.js';
import '../../arc-settings-panel-mixin/arc-settings-panel-mixin.js';
import '../../arc-settings-panel-mixin/arc-settings-panel-styles.js';
import '../../@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '../../@polymer/paper-listbox/paper-listbox.js';
import '../../@polymer/paper-item/paper-item.js';
import '../../@polymer/paper-item/paper-item-body.js';
import '../../@polymer/paper-styles/shadow.js';
import '../../@polymer/iron-flex-layout/iron-flex-layout.js';
import '../../arc-icons/arc-icons.js';
import '../../@polymer/iron-icon/iron-icon.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * `arc-view-settings-panel`
 *
 * Setting panel for ARC to control view
 *
 * ## Styling
 *
 * `<arc-view-settings-panel>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--arc-view-settings-panel` | Mixin applied to this elment | `{}`
 * `--arc-settings-panel-header-color` | Color of the settings panel header | `--accent-color`
 * `--arc-settings-panel-icon-color` | Settings panel icon color | `rgba(0, 0, 0, 0.34)`
 * `--arc-font-body1` | Mixin apllied to the description elements | `{}`
 * `--arc-font-subhead` | Mixin applied to the section headers | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof UiElements
 * @appliesMixin ArcComponents.ArcSettingsPanelMixin
 */
class ArcViewSettingsPanel extends ArcComponents.ArcSettingsPanelMixin(PolymerElement) {
  static get template() {
    return html`
    <style include="arc-settings-panel-styles">
    :host {
      display: block;
      @apply --arc-font-body1;
      @apply --arc-view-settings-panel;
    }

    .layout-selector {
      padding: 0 16px;
    }
    </style>
    <h2 class="panel-title">View settings</h2>
    <div class="card">
      <div class="layout-selector">
        <paper-dropdown-menu label="Lists layout">
          <paper-listbox slot="dropdown-content" attr-for-selected="data-value" selected="{{viewListType}}">
            <paper-item data-value="default">Default</paper-item>
            <paper-item data-value="comfortable">Comfortable</paper-item>
            <paper-item data-value="compact">Compact</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <paper-item class="clickable" on-click="openThemesPanel" data-action="themes-panel">
        <paper-item-body two-line="">
          <div>Themes</div>
          <div secondary="true">Opens themes selector screen</div>
        </paper-item-body>
        <iron-icon icon="arc:open-in-new" class="panel-icon" item-icon=""></iron-icon>
      </paper-item>
    </div>
`;
  }

  static get is() {
    return 'arc-view-settings-panel';
  }
  static get properties() {
    return {
      /**
       * Current setting value for list types.
       */
      viewListType: {
        type: Boolean,
        notify: true,
        observer: '_viewListTypeChanged'
      }
    };
  }

  _processValues(values) {
    if (typeof values.viewListType === 'undefined') {
      values.viewListType = 'default';
    } else {
      values.viewListType = String(values.viewListType);
    }
    return values;
  }

  _setSettings(values) {
    this.__settingsRestored = false;
    this.viewListType = values.viewListType;
    this.__settingsRestored = true;
  }

  _viewListTypeChanged(value) {
    this.updateSetting('viewListType', value);
  }
  /**
   * Dispatches `navigate` ebenmt to themes panel.
   */
  openThemesPanel() {
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        base: 'themes-panel'
      }
    }));
  }

  _settingsChanged(key, value) {
    this.__settingsRestored = false;
    switch (key) {
      case 'viewListType':
        this[key] = value;
        break;
    }
    this.__settingsRestored = true;
  }
}
window.customElements.define(ArcViewSettingsPanel.is, ArcViewSettingsPanel);
