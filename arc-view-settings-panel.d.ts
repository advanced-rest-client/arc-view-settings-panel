/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-view-settings-panel.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../arc-settings-panel-mixin/arc-settings-panel-mixin.d.ts" />
/// <reference path="../arc-settings-panel-mixin/arc-settings-panel-styles.d.ts" />
/// <reference path="../paper-dropdown-menu/paper-dropdown-menu.d.ts" />
/// <reference path="../paper-listbox/paper-listbox.d.ts" />
/// <reference path="../paper-item/paper-item.d.ts" />
/// <reference path="../paper-item/paper-item-body.d.ts" />
/// <reference path="../paper-styles/shadow.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />

declare namespace UiElements {

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
   */
  class ArcViewSettingsPanel extends
    ArcComponents.ArcSettingsPanelMixin(
    Object) {

    /**
     * Current setting value for list types.
     */
    viewListType: boolean|null|undefined;
    _processValues(values: any): any;
    _setSettings(values: any): void;
    _viewListTypeChanged(value: any): void;

    /**
     * Dispatches `navigate` ebenmt to themes panel.
     */
    openThemesPanel(): void;
    _settingsChanged(key: any, value: any): void;
  }
}

interface HTMLElementTagNameMap {
  "arc-view-settings-panel": UiElements.ArcViewSettingsPanel;
}
