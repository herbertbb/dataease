export default {
  common: {
    component: {
      input: '單行輸入',
      textarea: '多行輸入',
      select: '下拉框',
      radio: '單選',
      checkbox: '多選框',
      date: '日期',
      dateRange: '時間范圍',
      add_component_hint: '點擊或拖拽左側組件添加字段'
    },
    inputText: '請輸入',
    add: '添加',
    account: '賬號',
    email: '郵箱',
    phone: '手機號',
    pwd: '密碼',
    require: '必填',
    personal_info: '個人信息',
    about: '關于',
    exit_system: '退出系統',
    letter_start: '必須以字母開頭',
    required: '必填',
    operate: '操作',
    create_time: '創建時間',
    edit: '編輯',
    delete: '刪除',
    please_input: '請輸入',
    please_select: '請選擇',
    cancel: '取消',
    sure: '確定',
    input_limit: '長度在 {0} 到 {1} 個字符',
    save_success: '保存成功',
    roger_that: '知道了',
    delete_success: '刪除成功',
    copy: '復制',
    no_auth_tips: '缺少菜單權限，請聯系管理員'
  },
  login: {
    welcome: '歡迎使用',
    btn: '登錄',
    username_format: "1-25位字母數字或者._-{'@'}且以字母或數字開頭",
    pwd_format: '密碼長度在5-15'
  },
  component: {
    columnList: '列表項',
    selectInfo: '請選擇列表中要展示的信息',
    allSelect: '全選'
  },
  system: {
    user: '用戶',
    role: '角色',
    addUser: '@:common.add@:system.user'
  },
  user: {
    change_password: '修改密碼',
    name: '名稱',
    role: '角色',
    state: '用戶狀態',
    default_pwd: '默認密碼',
    confirm_delete: '確認刪除該用戶嗎？'
  },
  role: {
    add_title: '添加角色',
    edit_title: '編輯角色',
    name: '角色名稱',
    type: '角色類型',
    desc: '角色描述',
    average_role: '普通用戶',
    org_admin: '組織管理員',
    confirm_delete: '確認刪除該角色嗎？',
    delete_tips:
      '<div id="u7755_text" class="text" style="font-size: 12px;"><p><span style="color:#F59A23;">友情提示，角色被刪除后，歸屬于角色的用戶將做如下處理：</span></p><p><span style="color:#7F7F7F;">1、用戶擁有當前組織的其他角色，那么角色被刪除后，將用戶從該角色中移除。</span></p><p><span style="color:#7F7F7F;">2、該角色是用戶在當前組織下擁有的唯一角色，但用戶擁有其他組織下的角色，那么角色被刪除后，用戶也將從當前組織中移除。</span></p><p><span style="color:#7F7F7F;">3、該角色是用戶在當前組織下擁有的唯一角色，用戶在系統的其他組織下也沒有任何角色，那么角色被刪除后，用戶也將從當前系統中刪除。</span></p><p><span style="color:#7F7F7F;"><br></span></p></div>',
    confirm_unbind_user: '確定移除改用戶嗎',
    clear_in_system:
      '友情提示，從當前角色移除后，該用戶已沒有任何組織的任何角色，用戶將從系統中刪除。',
    clear_in_org:
      '友情提示，從當前角色移除后，該用戶已沒有當前組織的任何角色，將從當前組織中移除。',
    add_user: '為角色添加用戶({0})',
    unbind_success: '移除成功',
    bind_success: '綁定成功'
  },
  org: {
    org_title: '組織管理',
    org_move: '組織遷移',
    add: '添加組織',
    name: '組織名稱',
    sub_count: '下屬組織數',
    search_placeholder: '請輸入名稱搜索',
    add_sub: '添加子組織',
    edit: '編輯組織',
    parent: '上級組織',
    default_cannot_move: '默認組織不能刪除',
    cannot_delete: '無法刪除',
    confirm_delete: '確認刪除該組織嗎？',
    delete_children_first: '請先刪除子組織后，再刪除當前組織',
    confirm_content: '友情提示，組織被刪除后，組織下的資源也將被刪除',
    give_up_resource: '放棄資源，直接刪除',
    move_resource_first: '先遷移資源',
    default_parent_tips: '(默認當前組織)',
    admin_parent_tips: '(默認根組織)'
  },
  auth: {
    user_dimension: '按用戶配置',
    resource_dimension: '按資源配置',
    user: '用戶',
    role: '角色',
    resource: '資源權限',
    menu: '菜單權限',
    panel: '儀表板',
    screen: '數據大屏',
    dataset: '數據集',
    datasource: '數據源',
    empty_desc: '請選擇用戶/角色以及資源類型',
    uncommitted_tips: '有未提交的權限變更，是否提交？'
  },
  cron: {
    second: '秒',
    minute: '分',
    hour: '時',
    day: '日',
    minute_default: '分 (執行時間：0秒)',
    hour_default: '時 (執行時間：0分0秒)',
    day_default: '日 (執行時間：0時0分0秒)',
    month: '月',
    week: '周',
    year: '年',
    d_w_cant_not_set: '日期與星期不可以同時爲「不指定」',
    d_w_must_one_set: '日期與星期必須有一個爲「不指定」',
    every_day: '每日',
    cycle: '周期',
    not_set: '不指定',
    from: '從',
    to: '至',
    repeat: '循環',
    day_begin: '日開始，每',
    day_exec: '日執行一次',
    work_day: '工作日',
    this_month: '本月',
    day_near_work_day: '號，最近的工作日',
    this_week_last_day: '本月最後一天',
    set: '指定',
    every_hour: '每時',
    hour_begin: '時開始，每',
    hour_exec: '時執行一次',
    every_month: '每月',
    month_begin: '月開始，每',
    month_exec: '月執行一次',
    every: '每',
    every_begin: '開始，每',
    every_exec: '執行一次',
    every_week: '每周',
    week_start: '從星期',
    week_end: '至星期',
    every_year: '每年',
    week_tips: '說明：1-7 分別對應 周日-周六',
    minute_limit: '分鍾不能小於1，大於59',
    hour_limit: '小時不能小於1，大於23',
    day_limit: '天不能小於1，大於31'
  },
  template_manage: {
    name_already_exists_type: '分類名稱已存在',
    the_same_category: '同一分類下，該模板名稱已存在'
  },
  data_fill: {
    data_fill: '數據填報',
    data_fill_name: '數據填報名稱',
    p_data_fill_name: '請輸入數據填報名稱',
    save_df_success: '保存數據填報成功',
    permission: '填報權限',
    enable: '開啟',
    enable_hint: '數據填報開啟后，可將表單數據存放至數據源中，一旦開啟后，后期不允許關閉。',
    new_folder: '新建文件夾',
    form_manage: '表單管理',
    my_job: '我的填報',
    form: {
      mobile_number_format_is_incorrect: '手機號碼格式不正確',
      email_format_is_incorrect: '郵箱格式不正確',
      name: '名稱',
      rename: '重命名',
      untitled: '未命名表單',
      create_new_form: '新建表單',
      copy_new_form: '復制表單',
      edit_form: '編輯表單',
      title: '標題',
      no_form: '暫無表單，點擊',
      form_list_name: '填報表單',
      create_form: '新建表單',
      please_select: '請選擇',
      component: '組件',
      component_setting: '組件設置',
      hint: '提示詞',
      input_limit_50: '不超過50個字符',
      option: '選項',
      form_setting: '表單設置',
      confirm_delete: '確認刪除？(不會刪除已創建的數據庫表)',
      list: '表單數據',
      record: '提交記錄',
      task_manage: '任務管理',
      form_name: '表單名稱',
      commit_type: '表單提交方式',
      commit_type_append: '數據追加',
      commit_type_update: '數據更新',
      commit_rule: '更新條件',
      commit_rule_add: '添加更新規則',
      commit_rule_settings: '更新規則設置',
      commit_rule_set: '已設置',
      folder: '所屬文件夾',
      datasource: '數據源',
      table: '數據庫表',
      creator: '創建人',
      createTime: '創建時間',
      operation: '操作',
      operator: '操作人',
      operate_time: '操作時間',
      modify: '修改',
      show: '查看',
      delete: '刪除',
      show_data: '查看數據',
      text: '普通文本',
      number: '數字',
      tel: '手機號',
      email: '郵箱',
      duplicate_error: '重復',
      value_not_exists: '值不存在',
      range_separator: '分割字符',
      start_hint_word: '開始提示詞',
      end_hint_word: '結束提示詞',
      input_type: '格式類型',
      date_type: '展示粒度',
      check: '校驗',
      set_required: '設置為必填項',
      set_unique: '不允許重復值',
      set_multiple: '允許多選',
      use_datetime: '使用日期時間',
      custom: '自定義',
      use_datasource: '綁定數據源',
      bind_column: '綁定字段',
      bind_complete: '已綁定',
      option_value: '選項值',
      add_option: '添加選項值',
      form_name_cannot_none: '表單名稱不能為空',
      form_update_rule_none: '請配置更新規則',
      form_components_cannot_null: '請添加表單組件',
      option_list_cannot_empty: '選項值不能為空',
      option_list_datasource_cannot_empty: '選項值綁定數據源配置不能為空',
      component_setting_error: '組件設置錯誤',
      table_name: '數據庫表名',
      form_column: '表單字段',
      column_name: '數據庫表字段名稱',
      column_type: '數據庫字段類型',
      create_index: '創建索引',
      add_index: '新增索引',
      index_name: '索引名稱',
      create_index_hint: 'MySQL 8.0 或 MariaDB 10.8.0 以下版本不支持索引降序排序',
      index_column: '索引字段',
      order: '排序',
      order_asc: '升序',
      order_desc: '降序',
      order_none: '默認排序',
      add_column: '新增字段',
      please_insert_start: '請輸入開始時間',
      please_insert_end: '請輸入結束時間',
      save_form: '保存表單',
      default: '默認',
      default_built_in: '內建數據庫'
    },
    database: {
      nvarchar: '字符串',
      text: '長文本',
      number: '整型數字',
      decimal: '小數數字',
      datetime: '日期'
    },
    data: {
      commit_time: '提交時間',
      confirm_delete: '確認刪除?',
      add_data: '添加數據',
      batch_upload: '批量上傳',
      download_template: '下載模板',
      insert_data: '插入數據',
      update_data: '更新數據',
      delete_data: '刪除數據',
      recent_committer: '最近提交人',
      recent_commit_time: '最近提交時間',
      start: '開始',
      end: '結束',
      id_is: 'ID為[',
      data_not_found: ']的數據不存在'
    },
    task: {
      distribute_frequency: '發送頻率',
      one_time: '僅下發一次',
      interval: '定期下發',
      distribute_setting: '下發設置',
      task_distribute_setting: '任務下發設置',
      receive_object: '接收對象',
      receive_fit_column: '接收對象匹配字段',
      receiver: '接收人',
      receiver_not_null: '接收人不能為空！',
      commit_type: '數據提交方式',
      person: '人',
      select_receiver: '選擇接收人',
      exec_logs: '執行日志',
      assign_num: '下發人數',
      finished_user_num: '已完成人數',
      unfinished_user_num: '未完成人數',
      finished_rate: '完成率',
      confirm_batch_delete: '確定批量刪除任務',
      name: '名稱',
      creator: '創建人',
      create_time: '創建時間',
      rate_type: '任務下發模式',
      task_status: '任務狀態',
      add_task: '添加任務',
      task_name: '任務名稱',
      task_remain_time: '任務有效期',
      task_sender: '任務下發人',
      start_filling: '立即填報',
      task_distribute_time: '任務下發時間',
      task_expiration_time: '任務過期時間',
      task_finished_time: '任務完成時間',
      task_end_time: '任務截止時間',
      edit_data: '編輯數據',
      show_data: '查看數據',
      confirm_enable: '確認啟動任務？（單次任務會新建下發任務）',
      confirm_disable: '確認停止任務？',
      edit_task: '編輯任務',
      create_task: '新建任務',
      edit: '編輯',
      stop: '停止',
      start: '啟動',
      delete: '刪除',
      no_time_limit: '不限時',
      todo: '待辦項',
      finished: '已提交',
      expired: '已過期',
      running: '進行中',
      assigned_task: '已下發任務',
      task_finish_in: '在任務下發',
      task_finish_in_suffix: '內完成填報',
      open_sub_task: '查看已下發任務'
    },
    on_the_left: '請在左側選擇表單',
    search_by_commit_name: '根據操作人名稱搜索'
  }
}
