const ICONS = {
  "archive": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
  "cloud-upload": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>',
  "clipboard-paste": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>',
  "code": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
  "copy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  "download": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
  "eye": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  "file": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
  "files": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6a2 2 0 0 0-2 2v12.4a2 2 0 0 0 2 2h9.8a2 2 0 0 0 2-2V6.5Z"/><path d="M15.5 2v4.5h4.9"/><path d="M4 7.5v12.1a2 2 0 0 0 2 2h9"/></svg>',
  "film": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7.5h4"/><path d="M17 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 16.5h4"/></svg>',
  "folder-open": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2A2 2 0 0 0 11.07 6H18a2 2 0 0 1 2 2v2"/></svg>',
  "image": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  "loader-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
  "music": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  "package-open": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M15.17 2.21 12 5.38 8.83 2.21 3.77 5.25A2 2 0 0 0 2.72 7v10a2 2 0 0 0 1.05 1.76l7 4A2 2 0 0 0 12 22a2 2 0 0 0 1.23-.24l7-4A2 2 0 0 0 21.28 17V7a2 2 0 0 0-1.05-1.75Z"/><path d="m7 8 5 3 5-3"/><path d="m7 13 5 3 5-3"/></svg>',
  "pencil": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>',
  "plus": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  "search": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  "shield": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
  "trash-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
  "upload": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>',
  "x": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
};

const TYPE_META = {
  image: { label: "图片", icon: "image" },
  video: { label: "视频", icon: "film" },
  audio: { label: "音频", icon: "music" },
  document: { label: "文档", icon: "file" },
  archive: { label: "压缩包", icon: "archive" },
  code: { label: "代码", icon: "code" },
  model: { label: "3D 模型", icon: "package-open" },
  other: { label: "其他", icon: "file" }
};

const API_BASE = "./api";
const DB_NAME = "resource-hub-v1";
const DB_STORE = "resources";
const SERVER_LIMIT = 250 * 1024 * 1024;
const LOCAL_LIMIT = 100 * 1024 * 1024;
const SUPABASE_SOURCE_LIMIT = 250 * 1024 * 1024;
const SUPABASE_UPLOAD_LIMIT = 100 * 1024 * 1024;
const ADMIN_PASSWORD = "我是青雀大人的狗";
const ADMIN_PASSWORD_PINYIN = "woshiqingquedarendegou";
const ADMIN_SESSION_KEY = "qingzhi_admin_session";
const SUPABASE_URL = "https://vdihfdrylanbfyrhvnnl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_rMzNSWTBYgTa13AMLUgieQ_fq-RnPHY";
const SUPABASE_TABLE = "resource_items";
const SUPABASE_BUCKET = "resource-files";
const SUPABASE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

function readAdminSession() {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function writeAdminSession(enabled) {
  try {
    sessionStorage.setItem(ADMIN_SESSION_KEY, String(enabled));
  } catch (error) {
    // Session storage can be unavailable in locked-down browsing contexts.
  }
}

const state = {
  mode: "detecting",
  resources: [],
  queue: [],
  filter: "all",
  search: "",
  sort: "newest",
  activeUpload: false,
  syncingPending: false,
  isAdmin: readAdminSession(),
  selectedIds: new Set(),
  pendingDeleteIds: [],
  previewId: "",
  objectUrls: new Map(),
  db: null
};

const elements = {
  modeBadges: document.querySelectorAll("[data-mode-badge]"),
  adminButton: document.getElementById("adminButton"),
  adminButtonText: document.getElementById("adminButtonText"),
  dropZone: document.getElementById("dropZone"),
  fileInput: document.getElementById("fileInput"),
  chooseFilesButton: document.getElementById("chooseFilesButton"),
  clipboardButton: document.getElementById("clipboardButton"),
  resourceNameInput: document.getElementById("resourceNameInput"),
  categoryInput: document.getElementById("categoryInput"),
  tagsInput: document.getElementById("tagsInput"),
  descriptionInput: document.getElementById("descriptionInput"),
  queue: document.getElementById("queue"),
  queueSummary: document.getElementById("queueSummary"),
  queueList: document.getElementById("queueList"),
  clearQueueButton: document.getElementById("clearQueueButton"),
  queueProgressBar: document.getElementById("queueProgressBar"),
  queueProgressText: document.getElementById("queueProgressText"),
  uploadButton: document.getElementById("uploadButton"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  resourceCount: document.getElementById("resourceCount"),
  bulkBar: document.getElementById("bulkBar"),
  bulkCount: document.getElementById("bulkCount"),
  bulkDeleteButton: document.getElementById("bulkDeleteButton"),
  clearSelectionButton: document.getElementById("clearSelectionButton"),
  selectAllInput: document.getElementById("selectAllInput"),
  resourceTable: document.getElementById("resourceTable"),
  resourceList: document.getElementById("resourceList"),
  emptyState: document.getElementById("emptyState"),
  emptyTitle: document.getElementById("emptyTitle"),
  emptyDescription: document.getElementById("emptyDescription"),
  previewModal: document.getElementById("previewModal"),
  previewTitle: document.getElementById("previewTitle"),
  previewArea: document.getElementById("previewArea"),
  previewMeta: document.getElementById("previewMeta"),
  previewDownloadButton: document.getElementById("previewDownloadButton"),
  copyLinkButton: document.getElementById("copyLinkButton"),
  adminModal: document.getElementById("adminModal"),
  adminForm: document.getElementById("adminForm"),
  adminStatus: document.getElementById("adminStatus"),
  adminLoginButton: document.getElementById("adminLoginButton"),
  editModal: document.getElementById("editModal"),
  editForm: document.getElementById("editForm"),
  editTitle: document.getElementById("editTitle"),
  editStatus: document.getElementById("editStatus"),
  saveEditButton: document.getElementById("saveEditButton"),
  confirmModal: document.getElementById("confirmModal"),
  confirmTitle: document.getElementById("confirmTitle"),
  confirmDescription: document.getElementById("confirmDescription"),
  confirmDeleteButton: document.getElementById("confirmDeleteButton"),
  toastRegion: document.getElementById("toastRegion")
};

function icon(name) {
  return ICONS[name] || ICONS.file;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    if (node.dataset.iconReady === "true") {
      return;
    }
    node.innerHTML = icon(node.dataset.icon);
    node.dataset.iconReady = "true";
  });
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

function formatBytes(bytes) {
  const value = Number(bytes) || 0;
  if (value === 0) {
    return "0 B";
  }
  const units = ["B", "KB", "MB", "GB", "TB"];
  const index = Math.min(Math.floor(Math.log(value) / Math.log(1024)), units.length - 1);
  const amount = value / (1024 ** index);
  const digits = amount >= 100 || index === 0 ? 0 : amount >= 10 ? 1 : 2;
  return `${amount.toFixed(digits)} ${units[index]}`;
}

function formatDate(value, includeTime = true) {
  if (!value) {
    return "未知";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "未知";
  }
  const dateText = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
  if (!includeTime) {
    return dateText;
  }
  const timeText = new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
  return `${dateText} ${timeText}`;
}

function getKind(file) {
  const name = String(file.name || "").toLowerCase();
  const type = String(file.type || "").toLowerCase();
  const extension = name.includes(".") ? name.split(".").pop() : "";

  if (type.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp", "tif", "tiff"].includes(extension)) {
    return "image";
  }
  if (type.startsWith("video/") || ["mp4", "webm", "mov", "m4v", "avi", "mkv"].includes(extension)) {
    return "video";
  }
  if (type.startsWith("audio/") || ["mp3", "wav", "ogg", "flac", "m4a", "aac"].includes(extension)) {
    return "audio";
  }
  if (type === "application/pdf" || type.startsWith("text/") || ["pdf", "txt", "md", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "csv", "rtf"].includes(extension)) {
    return "document";
  }
  if (["zip", "rar", "7z", "tar", "gz", "bz2"].includes(extension)) {
    return "archive";
  }
  if (["html", "css", "js", "jsx", "ts", "tsx", "json", "xml", "yaml", "yml", "py", "java", "c", "cpp", "cs", "go", "rs", "php", "rb", "sh", "ps1"].includes(extension)) {
    return "code";
  }
  if (["glb", "gltf", "obj", "fbx", "stl", "blend"].includes(extension)) {
    return "model";
  }
  return "other";
}

function typeLabel(kind) {
  return TYPE_META[kind]?.label || TYPE_META.other.label;
}

function typeIcon(kind) {
  return TYPE_META[kind]?.icon || TYPE_META.other.icon;
}

function isImage(resource) {
  return resource.kind === "image";
}

function isPdf(resource) {
  const name = String(resource.name || "").toLowerCase();
  return resource.mime === "application/pdf" || name.endsWith(".pdf");
}

function getObjectUrl(resource) {
  if (resource.url && !resource.blob) {
    return resource.url;
  }
  if (!resource.blob) {
    return "";
  }
  if (!state.objectUrls.has(resource.id)) {
    state.objectUrls.set(resource.id, URL.createObjectURL(resource.blob));
  }
  return state.objectUrls.get(resource.id);
}

function revokeObjectUrl(id) {
  const url = state.objectUrls.get(id);
  if (url) {
    URL.revokeObjectURL(url);
    state.objectUrls.delete(id);
  }
}

function showToast(title, detail = "", type = "success") {
  hydrateIcons(elements.toastRegion);
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span data-icon="${type === "error" ? "x" : "check-circle"}"></span>
    <div>
      <strong>${escapeHTML(title)}</strong>
      ${detail ? `<span>${escapeHTML(detail)}</span>` : ""}
    </div>
  `;
  hydrateIcons(toast);
  elements.toastRegion.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("is-leaving");
    window.setTimeout(() => toast.remove(), 200);
  }, 3200);
}

function setAdminMode(enabled) {
  state.isAdmin = enabled;
  writeAdminSession(enabled);
  elements.adminButtonText.textContent = enabled ? "退出管理" : "管理员";
  elements.adminButton.setAttribute("aria-label", enabled ? "退出管理员模式" : "管理员模式");
  elements.adminButton.classList.toggle("is-active", enabled);
  state.selectedIds.clear();
  renderResources();
  showToast(enabled ? "管理员模式已开启" : "管理员模式已退出", enabled ? "现在可以编辑和删除资源" : "当前为访客模式");
}

function openAdminModal() {
  elements.adminForm.reset();
  elements.adminStatus.textContent = "";
  elements.adminModal.classList.add("is-open");
  elements.adminModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => elements.adminForm.elements.password.focus(), 0);
}

function closeAdminModal() {
  elements.adminModal.classList.remove("is-open");
  elements.adminModal.setAttribute("aria-hidden", "true");
  elements.adminStatus.textContent = "";
  syncModalOpenState();
}

function submitAdmin(event) {
  event.preventDefault();
  const password = elements.adminForm.elements.password.value;
  const normalizedPassword = password.trim().toLowerCase().replace(/[\s-]+/g, "");
  if (password !== ADMIN_PASSWORD && normalizedPassword !== ADMIN_PASSWORD_PINYIN) {
    elements.adminStatus.textContent = "密码错误。";
    return;
  }
  closeAdminModal();
  setAdminMode(true);
}

function setStorageMode(mode) {
  state.mode = mode;
  const badges = [...elements.modeBadges];
  const setBadge = (className, label) => {
    badges.forEach((badge) => {
      const text = badge.querySelector("span:last-child");
      const dot = badge.querySelector(".status-dot");
      if (dot) {
        dot.className = `status-dot ${className}`.trim();
      }
      if (text) {
        text.textContent = label;
      }
    });
  };

  if (mode === "server") {
    setBadge("is-online", "本地服务已连接");
    return;
  }

  if (mode === "supabase") {
    setBadge("is-online", "云端动态模式");
    return;
  }

  if (mode === "local") {
    setBadge("is-local", "浏览器本地模式");
    return;
  }

  setBadge("is-error", "存储连接异常");
}

async function detectStorageMode() {
  if (window.location.protocol === "file:") {
    setStorageMode("local");
    return;
  }

  if (SUPABASE_ENABLED && window.location.protocol === "https:") {
    setStorageMode("supabase");
    return;
  }

  try {
    const response = await fetchWithTimeout(`${API_BASE}/health`, { cache: "no-store" }, 2200);
    if (!response.ok) {
      throw new Error("health check failed");
    }
    const payload = await response.json();
    if (payload.service !== "resource-hub") {
      throw new Error("unexpected service");
    }
    setStorageMode("server");
  } catch (error) {
    setStorageMode(SUPABASE_ENABLED ? "supabase" : "local");
  }
}

async function fetchWithTimeout(url, options = {}, timeout = 8000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    ...extra
  };
}

function supabasePublicFileUrl(path) {
  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/${path}`;
}

let supabaseKeepAliveTimer = null;
let lastSupabasePing = 0;

async function pingSupabaseKeepAlive() {
  if (state.mode !== "supabase") {
    return;
  }
  try {
    await fetchWithTimeout(
      `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?select=id&limit=1`,
      { headers: supabaseHeaders(), cache: "no-store" },
      10000
    );
    lastSupabasePing = Date.now();
  } catch (error) {
    // Keep-alive failures are intentionally silent.
  }
}

function startSupabaseKeepAlive() {
  if (state.mode !== "supabase") {
    return;
  }
  window.clearInterval(supabaseKeepAliveTimer);
  pingSupabaseKeepAlive();
  supabaseKeepAliveTimer = window.setInterval(pingSupabaseKeepAlive, 6 * 60 * 60 * 1000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && Date.now() - lastSupabasePing > 6 * 60 * 60 * 1000) {
      pingSupabaseKeepAlive();
    }
  });
}

function openDatabase() {
  if (!("indexedDB" in window)) {
    return Promise.reject(new Error("当前浏览器不支持 IndexedDB"));
  }
  if (state.db) {
    return Promise.resolve(state.db);
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => {
      state.db = request.result;
      resolve(state.db);
    };
    request.onerror = () => reject(request.error || new Error("无法打开本地数据库"));
  });
}

function databaseRequest(mode, operation) {
  return openDatabase().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE, mode);
    const store = transaction.objectStore(DB_STORE);
    const request = operation(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("本地存储操作失败"));
  }));
}

function getAllLocalResources() {
  return databaseRequest("readonly", (store) => store.getAll());
}

function putLocalResource(resource) {
  return databaseRequest("readwrite", (store) => store.put(resource));
}

function removeLocalResource(id) {
  return databaseRequest("readwrite", (store) => store.delete(id));
}

async function requestPersistentStorage() {
  if (!navigator.storage || typeof navigator.storage.persist !== "function") {
    return false;
  }
  try {
    return await navigator.storage.persist();
  } catch (error) {
    return false;
  }
}

async function loadResources() {
  try {
    let resources = [];
    if (state.mode === "server") {
      const response = await fetchWithTimeout(`${API_BASE}/resources`, { cache: "no-store" }, 10000);
      if (!response.ok) {
        throw new Error("无法读取资源列表");
      }
      const payload = await response.json();
      resources = Array.isArray(payload.resources) ? payload.resources : [];
    } else if (state.mode === "supabase") {
      const response = await fetchWithTimeout(
        `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?select=*&order=uploaded_at.desc`,
        { headers: supabaseHeaders(), cache: "no-store" },
        12000
      );
      if (!response.ok) {
        const detail = await response.text();
        throw new Error(`Supabase table unavailable: ${detail.slice(0, 120)}`);
      }
      resources = await response.json();
      resources = resources.map((resource) => ({
        ...resource,
        url: resource.file_url,
        filePath: resource.file_path,
        uploadedAt: resource.uploaded_at
      }));
      const pendingResources = (await getAllLocalResources())
        .filter((resource) => resource.pendingCloud === true)
        .map((resource) => ({ ...resource, storage: "browser", pendingCloud: true }));
      resources = [...pendingResources, ...resources];
    } else if (state.mode === "local") {
      resources = await getAllLocalResources();
    } else {
      throw new Error("存储服务不可用");
    }

    state.resources = resources
      .map(normalizeResource)
      .filter(Boolean);
    state.selectedIds.clear();
    renderAll();
  } catch (error) {
    if (state.mode === "supabase") {
      try {
        await openDatabase();
        state.resources = (await getAllLocalResources()).map(normalizeResource).filter(Boolean);
        state.selectedIds.clear();
        setStorageMode("local");
        renderAll();
        showToast("云端数据库未就绪", "已切换到当前浏览器存储，请先执行 Supabase 初始化 SQL", "error");
        return;
      } catch (fallbackError) {
        // Fall through to the normal error message.
      }
    }
    showToast("读取资源失败", error.message || "请稍后重试", "error");
  }
}

function parseChunkManifest(filePath) {
  if (typeof filePath !== "string" || !filePath.startsWith("chunked:")) {
    return null;
  }
  try {
    const manifest = JSON.parse(filePath.slice("chunked:".length));
    return manifest && Array.isArray(manifest.parts) ? manifest : null;
  } catch (error) {
    return null;
  }
}

function normalizeResource(resource) {
  if (!resource || !resource.id) {
    return null;
  }
  const name = resource.name || resource.title || "未命名资源";
  const fallbackFile = { name, type: resource.mime || "" };
  const tags = Array.isArray(resource.tags)
    ? resource.tags
    : typeof resource.tags === "string"
      ? resource.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [];
  const filePath = resource.filePath || resource.file_path || "";
  const manifest = parseChunkManifest(filePath);
  const compressed = resource.compressed === true || filePath.endsWith(".qzg") || Boolean(manifest?.compressed);
  const chunkParts = manifest?.parts || [];
  return {
    ...resource,
    name,
    kind: resource.kind || getKind(fallbackFile),
    category: resource.category || "其他",
    tags,
    size: Number(resource.size || resource.fileSize) || 0,
    url: resource.url || resource.file_url || "",
    filePath,
    chunked: chunkParts.length > 1,
    chunkParts,
    compressed,
    originalName: resource.originalName || name,
    originalMime: resource.originalMime || resource.mime || "application/octet-stream",
    originalSize: Number(resource.originalSize || resource.size) || 0,
    uploadedAt: resource.uploadedAt || resource.uploaded_at || new Date().toISOString()
  };
}

function renderAll() {
  renderSummary();
  renderResources();
}

function renderSummary() {
  const totalSize = state.resources.reduce((sum, resource) => sum + resource.size, 0);
  elements.resourceCount.textContent = state.resources.length
    ? `${state.resources.length} 个资源 · ${formatBytes(totalSize)}`
    : "0 个资源";
}

function filteredResources() {
  const search = state.search.trim().toLowerCase();
  const resources = state.resources.filter((resource) => {
    const matchesType = state.filter === "all"
      || (state.filter === "other" ? ["model", "code", "other"].includes(resource.kind) : resource.kind === state.filter);
    if (!matchesType) {
      return false;
    }
    if (!search) {
      return true;
    }
    const haystack = [
      resource.name,
      resource.category,
      resource.description,
      ...(resource.tags || []),
      typeLabel(resource.kind)
    ].join(" ").toLowerCase();
    return haystack.includes(search);
  });

  resources.sort((a, b) => {
    if (state.sort === "oldest") {
      return new Date(a.uploadedAt) - new Date(b.uploadedAt);
    }
    if (state.sort === "name") {
      return a.name.localeCompare(b.name, "zh-CN");
    }
    if (state.sort === "size") {
      return b.size - a.size;
    }
    return new Date(b.uploadedAt) - new Date(a.uploadedAt);
  });

  return resources;
}

function resourceIconHTML(resource) {
  if (resource.chunked) {
    return `<span class="file-avatar file-avatar--${escapeHTML(resource.kind)}" data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>`;
  }
  const url = isImage(resource) ? getObjectUrl(resource) : "";
  if (url) {
    return `<span class="file-avatar file-avatar--image"><img src="${escapeHTML(url)}" alt="" loading="lazy"></span>`;
  }
  return `<span class="file-avatar file-avatar--${escapeHTML(resource.kind)}" data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>`;
}

function renderResources() {
  const resources = filteredResources();
  const hasAnyResources = state.resources.length > 0;
  state.selectedIds = new Set(
    [...state.selectedIds].filter((id) => state.resources.some((resource) => resource.id === id))
  );

  elements.resourceTable.hidden = !hasAnyResources;
  elements.emptyState.hidden = hasAnyResources;

  if (!hasAnyResources) {
    elements.emptyTitle.textContent = "还没有资源";
    elements.emptyDescription.textContent = "添加第一个文件后，它会显示在这里。";
    elements.resourceList.innerHTML = "";
    syncSelection(resources);
    return;
  }

  if (!resources.length) {
    elements.emptyState.hidden = false;
    elements.resourceTable.hidden = true;
    elements.emptyTitle.textContent = "没有匹配的资源";
    elements.emptyDescription.textContent = "换一个关键词或资源类型试试。";
    elements.resourceList.innerHTML = "";
    syncSelection(resources);
    return;
  }

  elements.resourceList.innerHTML = resources.map((resource) => {
    const tags = resource.tags.length ? ` · ${resource.tags.slice(0, 2).join(" / ")}` : "";
    const playable = ["image", "video", "audio"].includes(resource.kind);
    const selection = state.isAdmin
      ? `<label class="resource-select" aria-label="选择 ${escapeHTML(resource.name)}">
          <input type="checkbox" data-select-resource="${escapeHTML(resource.id)}" ${state.selectedIds.has(resource.id) ? "checked" : ""}>
        </label>`
      : "";
    const previewAction = state.isAdmin
      ? `<button class="row-action" type="button" data-action="preview" data-id="${escapeHTML(resource.id)}" aria-label="预览 ${escapeHTML(resource.name)}">
          <span data-icon="eye"></span>
        </button>`
      : "";
    const editAction = state.isAdmin
      ? `<button class="row-action" type="button" data-action="edit" data-id="${escapeHTML(resource.id)}" aria-label="编辑 ${escapeHTML(resource.name)}">
          <span data-icon="pencil"></span>
        </button>`
      : "";
    const deleteAction = state.isAdmin
      ? `<button class="row-action row-action--danger" type="button" data-action="delete" data-id="${escapeHTML(resource.id)}" aria-label="删除 ${escapeHTML(resource.name)}">
          <span data-icon="trash-2"></span>
        </button>`
      : "";
    return `
      <article class="resource-row ${playable ? "is-playable" : ""}" data-resource-id="${escapeHTML(resource.id)}" ${playable ? 'role="button" tabindex="0"' : ""}>
        <div class="resource-main">
          ${selection}
          ${resourceIconHTML(resource)}
          <div class="resource-main__copy">
            <strong title="${escapeHTML(resource.name)}">${escapeHTML(resource.name)}</strong>
            <span title="${escapeHTML(resource.description || "")}">${escapeHTML(formatBytes(resource.size))} · ${escapeHTML(resource.mime || "未知类型")}${escapeHTML(tags)}</span>
          </div>
        </div>
        <span class="resource-cell"><span class="category-chip">${escapeHTML(resource.category)}</span></span>
        <span class="resource-cell"><span class="type-chip type-chip--${escapeHTML(resource.kind)}">${escapeHTML(typeLabel(resource.kind))}</span></span>
        <span class="resource-cell">${escapeHTML(formatDate(resource.uploadedAt))}</span>
        <span class="resource-actions">
          ${previewAction}
          ${editAction}
          <button class="row-action" type="button" data-action="download" data-id="${escapeHTML(resource.id)}" aria-label="下载 ${escapeHTML(resource.name)}">
            <span data-icon="download"></span>
          </button>
          ${deleteAction}
        </span>
      </article>
    `;
  }).join("");

  hydrateIcons(elements.resourceList);
  syncSelection(resources);
}

function syncSelection(visibleResources = filteredResources()) {
  const selectedCount = state.selectedIds.size;
  const visibleSelected = visibleResources.filter((resource) => state.selectedIds.has(resource.id)).length;
  const selectAllWrapper = elements.selectAllInput.closest(".table-select");

  selectAllWrapper.hidden = !state.isAdmin;
  elements.bulkBar.hidden = !state.isAdmin || selectedCount === 0;
  elements.bulkCount.textContent = `已选择 ${selectedCount} 个资源`;
  elements.selectAllInput.checked = visibleResources.length > 0 && visibleSelected === visibleResources.length;
  elements.selectAllInput.indeterminate = visibleSelected > 0 && visibleSelected < visibleResources.length;
}

function toggleSelected(id, selected) {
  if (selected) {
    state.selectedIds.add(id);
  } else {
    state.selectedIds.delete(id);
  }
  syncSelection();
}

function setVisibleSelection(selected) {
  filteredResources().forEach((resource) => {
    if (selected) {
      state.selectedIds.add(resource.id);
    } else {
      state.selectedIds.delete(resource.id);
    }
  });
  renderResources();
}

function clearSelection() {
  state.selectedIds.clear();
  renderResources();
}

function addFiles(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) {
    return;
  }

  const limit = state.mode === "server"
    ? SERVER_LIMIT
    : state.mode === "supabase"
      ? SUPABASE_SOURCE_LIMIT
      : LOCAL_LIMIT;
  const queuedKeys = new Set(state.queue.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
  const existingKeys = new Set(state.resources.map((resource) => `${resource.name}:${resource.size}`));
  let added = 0;
  let skipped = 0;

  files.forEach((file) => {
    const key = `${file.name}:${file.size}:${file.lastModified}`;
    const duplicateKey = `${file.name}:${file.size}`;
    if (!file.size || file.size > limit || queuedKeys.has(key) || existingKeys.has(duplicateKey)) {
      skipped += 1;
      return;
    }
    state.queue.push({
      id: createId(),
      file,
      kind: getKind(file),
      status: "ready",
      progress: 0,
      error: ""
    });
    queuedKeys.add(key);
    existingKeys.add(duplicateKey);
    added += 1;
  });

  renderQueue();
  if (added) {
    showToast("已加入上传队列", `${added} 个文件等待上传`);
  }
  if (skipped) {
    const detail = state.mode === "local" && files.some((file) => file.size > LOCAL_LIMIT)
      ? "超出本地模式大小限制的文件已跳过"
      : "重复、空文件或超出大小限制的文件已跳过";
    showToast("部分文件未加入", detail, "error");
  }
}

async function addFromClipboard() {
  if (!navigator.clipboard || typeof navigator.clipboard.read !== "function") {
    showToast("剪贴板不可用", "请使用支持剪贴板读取的现代浏览器，或通过本地服务打开页面", "error");
    return;
  }

  try {
    const clipboardItems = await navigator.clipboard.read();
    const files = [];
    for (const item of clipboardItems) {
      const imageType = item.types.find((type) => type.startsWith("image/"));
      const textType = item.types.find((type) => type === "text/plain");
      if (imageType) {
        const blob = await item.getType(imageType);
        const extension = imageType.split("/")[1]?.replace("jpeg", "jpg") || "png";
        files.push(new File([blob], `clipboard-${Date.now()}.${extension}`, { type: imageType }));
      } else if (textType) {
        const blob = await item.getType(textType);
        files.push(new File([blob], `clipboard-${Date.now()}.txt`, { type: "text/plain" }));
      }
    }

    if (!files.length) {
      showToast("剪贴板中没有可用内容", "请先复制图片或文本", "error");
      return;
    }
    addFiles(files);
  } catch (error) {
    showToast("读取剪贴板失败", "请允许浏览器访问剪贴板后重试", "error");
  }
}

function renderQueue() {
  elements.queue.hidden = state.queue.length === 0;
  if (!state.queue.length) {
    elements.queueList.innerHTML = "";
    elements.queueProgressBar.style.width = "0%";
    elements.queueProgressText.textContent = "准备就绪";
    elements.uploadButton.disabled = false;
    elements.uploadButton.querySelector("span:last-child").textContent = "开始上传";
    return;
  }

  elements.queueSummary.textContent = `${state.queue.length} 个文件`;
  elements.queueList.innerHTML = state.queue.map((item) => {
    const statusText = item.status === "uploading"
      ? `上传中 ${Math.round(item.progress)}%`
      : item.status === "done"
        ? "上传完成"
        : item.status === "error"
          ? item.error || "上传失败"
          : "等待上传";
    return `
      <div class="queue-item ${item.status === "done" ? "is-done" : ""} ${item.status === "error" ? "is-error" : ""}" data-queue-id="${escapeHTML(item.id)}">
        <span class="file-avatar file-avatar--${escapeHTML(item.kind)}" data-icon="${escapeHTML(typeIcon(item.kind))}"></span>
        <div class="queue-item__copy">
          <strong title="${escapeHTML(item.file.name)}">${escapeHTML(item.file.name)}</strong>
          <span>${escapeHTML(formatBytes(item.file.size))} · ${escapeHTML(typeLabel(item.kind))}</span>
        </div>
        <div class="queue-item__progress" style="--progress:${Math.max(0, Math.min(100, item.progress))}%">
          <span></span>
          <small>${escapeHTML(statusText)}</small>
        </div>
        <button class="queue-item__remove" type="button" data-remove-queue="${escapeHTML(item.id)}" aria-label="移出队列" ${item.status === "uploading" ? "disabled" : ""}>
          <span data-icon="x"></span>
        </button>
      </div>
    `;
  }).join("");
  hydrateIcons(elements.queueList);
  updateOverallProgress();
}

function updateQueueItem(id, updates) {
  const item = state.queue.find((entry) => entry.id === id);
  if (!item) {
    return;
  }
  Object.assign(item, updates);
  renderQueue();
}

function updateOverallProgress() {
  const progress = state.queue.length
    ? state.queue.reduce((sum, item) => sum + (item.status === "done" ? 100 : item.progress || 0), 0) / state.queue.length
    : 0;
  elements.queueProgressBar.style.width = `${progress}%`;

  if (!state.activeUpload) {
    const readyCount = state.queue.filter((item) => item.status === "ready" || item.status === "error").length;
    elements.queueProgressText.textContent = readyCount ? `${readyCount} 个文件待上传` : "上传完成";
    elements.uploadButton.disabled = readyCount === 0;
    elements.uploadButton.querySelector("span:last-child").textContent = readyCount === state.queue.length ? "开始上传" : "继续上传";
    return;
  }

  elements.queueProgressText.textContent = `总进度 ${Math.round(progress)}%`;
}

function removeQueueItem(id) {
  const item = state.queue.find((entry) => entry.id === id);
  if (!item || item.status === "uploading") {
    return;
  }
  state.queue = state.queue.filter((entry) => entry.id !== id);
  renderQueue();
}

function clearQueue() {
  if (state.activeUpload) {
    return;
  }
  state.queue = [];
  renderQueue();
}

function uploadMetadata(file, index = 0, total = 1) {
  const customName = elements.resourceNameInput.value.trim();
  const name = customName
    ? (total > 1 ? `${customName} ${index + 1}` : customName)
    : file.name;
  return {
    fileName: file.name,
    name,
    category: elements.categoryInput.value || "其他",
    tags: elements.tagsInput.value.split(/[,，]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 8),
    description: elements.descriptionInput.value.trim()
  };
}

function uploadWithProgress(item, metadata) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams();
    params.set("fileName", metadata.fileName);
    params.set("displayName", metadata.name);
    params.set("category", metadata.category);
    params.set("tags", metadata.tags.join(","));
    params.set("description", metadata.description);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_BASE}/upload?${params.toString()}`);
    xhr.setRequestHeader("Content-Type", item.file.type || "application/octet-stream");
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        updateQueueItem(item.id, {
          status: "uploading",
          progress: Math.min(96, (event.loaded / event.total) * 100)
        });
      }
    };
    xhr.onload = () => {
      let payload = {};
      try {
        payload = JSON.parse(xhr.responseText || "{}");
      } catch (error) {
        payload = {};
      }
      if (xhr.status >= 200 && xhr.status < 300 && payload.resource) {
        resolve(payload.resource);
        return;
      }
      reject(new Error(payload.error || `上传失败（${xhr.status}）`));
    };
    xhr.onerror = () => reject(new Error("网络连接中断"));
    xhr.onabort = () => reject(new Error("上传已取消"));
    xhr.send(item.file);
  });
}

async function uploadLocally(item, metadata, options = {}) {
  updateQueueItem(item.id, { status: "uploading", progress: 12 });
  await requestPersistentStorage();

  const resource = {
    id: createId(),
    name: metadata.name || item.file.name,
    category: metadata.category,
    tags: metadata.tags,
    description: metadata.description,
    kind: item.kind,
    mime: item.file.type || "application/octet-stream",
    size: item.file.size,
    uploadedAt: new Date().toISOString(),
    blob: item.file,
    storage: "browser",
    pendingCloud: options.pendingCloud === true
  };

  updateQueueItem(item.id, { progress: 42 });
  await putLocalResource(resource);
  updateQueueItem(item.id, { progress: 100 });
  return resource;
}

async function gzipFile(file) {
  if (typeof CompressionStream !== "function") {
    throw new Error("当前浏览器不支持无损压缩");
  }
  const compressedStream = file.stream().pipeThrough(new CompressionStream("gzip"));
  const compressedBlob = await new Response(compressedStream).blob();
  return new File([compressedBlob], `${file.name}.gz`, {
    type: "application/gzip",
    lastModified: file.lastModified
  });
}

async function prepareSupabaseUpload(file) {
  const original = {
    blob: file,
    compressed: false,
    originalName: file.name,
    originalMime: file.type || "application/octet-stream",
    originalSize: file.size
  };
  const compressibleKinds = ["document", "code", "other"];
  const shouldAttempt = file.size > SUPABASE_UPLOAD_LIMIT || compressibleKinds.includes(getKind(file));
  if (!shouldAttempt) {
    return original;
  }

  try {
    const compressedFile = await gzipFile(file);
    if (file.size <= SUPABASE_UPLOAD_LIMIT && compressedFile.size >= file.size * 0.97) {
      return original;
    }
    if (compressedFile.size > SUPABASE_UPLOAD_LIMIT) {
      throw new Error(`压缩后仍为 ${formatBytes(compressedFile.size)}，超过 100 MB 云端上限`);
    }
    return {
      blob: compressedFile,
      compressed: true,
      originalName: file.name,
      originalMime: file.type || "application/octet-stream",
      originalSize: file.size
    };
  } catch (error) {
    if (error && error.message && error.message.includes("超过")) {
      throw error;
    }
    throw new Error(`文件超过 100 MB，且无法无损压缩：${error.message || "压缩失败"}`);
  }
}

function uploadBlobWithRetry(blob, uploadUrl, onProgress, attempts = 3) {
  return new Promise((resolve, reject) => {
    const attemptUpload = (attempt) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", uploadUrl);
      xhr.setRequestHeader("apikey", SUPABASE_PUBLISHABLE_KEY);
      xhr.setRequestHeader("Authorization", `Bearer ${SUPABASE_PUBLISHABLE_KEY}`);
      xhr.setRequestHeader("Content-Type", blob.type || "application/octet-stream");
      xhr.setRequestHeader("x-upsert", "true");
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          onProgress(event.loaded / event.total);
        }
      };
      xhr.onerror = () => retry(new Error("网络连接中断"));
      xhr.onabort = () => reject(new Error("上传已取消"));
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve();
          return;
        }
        retry(new Error(`分片上传失败（${xhr.status}）`));
      };
      xhr.send(blob);

      function retry(error) {
        if (attempt >= attempts) {
          reject(error);
          return;
        }
        window.setTimeout(() => attemptUpload(attempt + 1), attempt * 900);
      }
    };
    attemptUpload(1);
  });
}

async function verifySupabaseObject(objectPath) {
  const response = await fetchWithTimeout(supabasePublicFileUrl(objectPath), {
    method: "GET",
    headers: { Range: "bytes=0-0" },
    cache: "no-store"
  }, 15000);
  if (!response.ok && response.status !== 206) {
    throw new Error("云端分片校验失败");
  }
}

async function uploadToSupabase(item, metadata) {
  const prepared = await prepareSupabaseUpload(item.file);
  const id = createId();
  const extension = (item.file.name.match(/\.[a-zA-Z0-9]+$/) || [""])[0].toLowerCase();
  const chunkSize = 45 * 1024 * 1024;
  const totalSize = prepared.blob.size;
  const parts = [];
  for (let offset = 0, index = 0; offset < totalSize; offset += chunkSize, index += 1) {
    parts.push({
      blob: prepared.blob.slice(offset, Math.min(offset + chunkSize, totalSize)),
      path: `${id}/part-${String(index + 1).padStart(4, "0")}.part`
    });
  }

  const uploadedPaths = [];
  try {
    for (let index = 0; index < parts.length; index += 1) {
      const part = parts[index];
      await uploadBlobWithRetry(
        part.blob,
        `${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/${part.path}`,
        (partProgress) => {
          const completed = index / parts.length;
          const current = (partProgress || 0) / parts.length;
          updateQueueItem(item.id, {
            status: "uploading",
            progress: Math.min(94, (completed + current) * 94)
          });
        }
      );
      uploadedPaths.push(part.path);
    }

    for (const path of uploadedPaths) {
      await verifySupabaseObject(path);
    }
    updateQueueItem(item.id, { progress: 96 });

    const fileUrl = supabasePublicFileUrl(uploadedPaths[0]);
    const manifest = uploadedPaths.length > 1
      ? `chunked:${JSON.stringify({
        version: 1,
        compressed: prepared.compressed,
        parts: uploadedPaths
      })}`
      : uploadedPaths[0];
    const row = {
      id,
      name: metadata.name || item.file.name,
      category: metadata.category,
      tags: metadata.tags,
      description: metadata.description,
      kind: item.kind,
      mime: prepared.originalMime,
      size: prepared.originalSize,
      file_url: fileUrl,
      file_path: manifest
    };

    const response = await fetchWithTimeout(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
      method: "POST",
      headers: supabaseHeaders({
        "Content-Type": "application/json",
        Prefer: "return=representation"
      }),
      body: JSON.stringify(row)
    }, 20000);
    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`资源信息保存失败：${detail.slice(0, 140)}`);
    }
    const inserted = await response.json();
    const saved = Array.isArray(inserted) ? inserted[0] : row;
    return { ...saved, url: fileUrl, filePath: manifest };
  } catch (error) {
    removeSupabaseObject({ filePath: uploadedPaths.join(",") }).catch(() => {});
    throw error;
  }
}

async function removeSupabaseObject(resource) {
  if (!resource || !resource.filePath) {
    return;
  }
  const manifest = parseChunkManifest(resource.filePath);
  const paths = manifest
    ? manifest.parts
    : resource.filePath.includes(",")
      ? resource.filePath.split(",").filter(Boolean)
      : [resource.filePath];
  await fetchWithTimeout(`${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}`, {
    method: "DELETE",
    headers: supabaseHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ prefixes: paths })
  }, 12000);
}

async function uploadOne(item, metadata) {
  updateQueueItem(item.id, { status: "uploading", progress: 1, error: "" });
  let localRecord = null;
  try {
    let resource;
    if (state.mode === "server") {
      resource = await uploadWithProgress(item, metadata);
    } else if (state.mode === "supabase" && resource.storage !== "browser") {
      localRecord = await uploadLocally(item, metadata, { pendingCloud: true });
      state.resources = [normalizeResource(localRecord), ...state.resources];
      renderAll();
      resource = await uploadToSupabase(item, metadata);
      await removeLocalResource(localRecord.id);
      state.resources = state.resources.filter((entry) => entry.id !== localRecord.id);
    } else {
      resource = await uploadLocally(item, metadata);
    }
    const normalized = normalizeResource(resource);
    state.resources = [normalized, ...state.resources.filter((entry) => entry.id !== normalized.id)];
    updateQueueItem(item.id, { status: "done", progress: 100, error: "" });
    renderAll();
    return true;
  } catch (error) {
    updateQueueItem(item.id, {
      status: "error",
      progress: 0,
      error: error.message || "上传失败"
    });
    return false;
  }
}

async function syncPendingCloudUploads() {
  if (state.mode !== "supabase" || state.syncingPending) {
    return;
  }
  const pendingResources = (await getAllLocalResources())
    .filter((resource) => resource.pendingCloud === true && resource.blob);
  if (!pendingResources.length) {
    return;
  }

  state.syncingPending = true;
  let syncedCount = 0;
  for (const pending of pendingResources) {
    try {
      const cloudResource = await uploadToSupabase(
        { id: pending.id, file: pending.blob, kind: pending.kind },
        {
          name: pending.name,
          category: pending.category,
          tags: pending.tags || [],
          description: pending.description || ""
        }
      );
      await removeLocalResource(pending.id);
      state.resources = [
        normalizeResource(cloudResource),
        ...state.resources.filter((resource) => resource.id !== pending.id && resource.id !== cloudResource.id)
      ];
      syncedCount += 1;
      renderAll();
    } catch (error) {
      // The local copy remains queued for the next visit.
    }
  }
  state.syncingPending = false;
  if (syncedCount) {
    showToast("本地暂存已同步到云端", `成功上传 ${syncedCount} 个资源`);
  }
}

async function startUpload() {
  if (state.activeUpload) {
    return;
  }

  const pending = state.queue.filter((item) => item.status === "ready" || item.status === "error");
  if (!pending.length) {
    showToast("没有待上传文件", "请先添加新的资源", "error");
    return;
  }

  state.activeUpload = true;
  elements.uploadButton.disabled = true;
  elements.uploadButton.querySelector("span:last-child").textContent = "上传中";
  let successCount = 0;
  let failedCount = 0;

  for (let index = 0; index < pending.length; index += 1) {
    const item = pending[index];
    const metadata = uploadMetadata(item.file, index, pending.length);
    const success = await uploadOne(item, metadata);
    if (success) {
      successCount += 1;
    } else {
      failedCount += 1;
    }
  }

  state.activeUpload = false;
  renderQueue();

  if (successCount && !failedCount) {
    elements.resourceNameInput.value = "";
    elements.tagsInput.value = "";
    elements.descriptionInput.value = "";
    showToast("全部上传完成", `${successCount} 个资源已加入资源库`);
  } else if (successCount && failedCount) {
    showToast("上传部分完成", `${successCount} 个成功，${failedCount} 个失败`, "error");
  } else {
    showToast("上传失败", "请检查网络或文件大小后重试", "error");
  }
}

function findResource(id) {
  return state.resources.find((resource) => resource.id === id);
}

function openPreview(id) {
  const resource = findResource(id);
  if (!resource) {
    return;
  }

  state.previewId = id;
  elements.previewTitle.textContent = resource.name;
  const url = getObjectUrl(resource);
  let preview = "";

  if (resource.chunked) {
    preview = `
      <div class="preview-placeholder">
        <span data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>
        <strong>分片资源</strong>
        <span>文件保存在多个云端分片中，下载时会自动合并并恢复。</span>
      </div>
    `;
  } else if (resource.kind === "image" && url) {
    preview = `<img src="${escapeHTML(url)}" alt="${escapeHTML(resource.name)}">`;
  } else if (resource.kind === "video" && url) {
    preview = `<video src="${escapeHTML(url)}" controls autoplay playsinline preload="metadata"></video>`;
  } else if (resource.kind === "audio" && url) {
    preview = `<audio src="${escapeHTML(url)}" controls autoplay preload="metadata"></audio>`;
  } else if (isPdf(resource) && url) {
    preview = `<iframe src="${escapeHTML(url)}" title="${escapeHTML(resource.name)}"></iframe>`;
  } else {
    preview = `
      <div class="preview-placeholder">
        <span data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>
        <strong>${escapeHTML(typeLabel(resource.kind))}文件</strong>
        <span>此格式暂不支持页面内预览，可下载后打开。</span>
      </div>
    `;
  }

  elements.previewArea.innerHTML = preview;
  const tags = resource.tags.length ? resource.tags.join("、") : "无标签";
  elements.previewMeta.innerHTML = `
    <div class="preview-meta__item"><span>文件大小</span><strong>${escapeHTML(formatBytes(resource.size))}</strong></div>
    <div class="preview-meta__item"><span>资源分类</span><strong>${escapeHTML(resource.category)}</strong></div>
    <div class="preview-meta__item"><span>标签</span><strong title="${escapeHTML(tags)}">${escapeHTML(tags)}</strong></div>
    <div class="preview-meta__item"><span>上传时间</span><strong>${escapeHTML(formatDate(resource.uploadedAt))}</strong></div>
    <div class="preview-meta__item"><span>文件类型</span><strong>${escapeHTML(typeLabel(resource.kind))}</strong></div>
    <div class="preview-meta__item"><span>备注</span><strong title="${escapeHTML(resource.description || "无")}">${escapeHTML(resource.description || "无")}</strong></div>
  `;
  hydrateIcons(elements.previewArea);
  elements.copyLinkButton.hidden = !["server", "supabase"].includes(state.mode) || !resource.url;
  elements.previewModal.classList.add("is-open");
  elements.previewModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const media = elements.previewArea.querySelector("video, audio");
  if (media) {
    media.play().catch(() => {
      // Browser autoplay policies may still require a second click on the player.
    });
  }
}

function closePreview() {
  const media = elements.previewArea.querySelector("video, audio");
  if (media) {
    media.pause();
  }
  elements.previewArea.innerHTML = "";
  elements.previewModal.classList.remove("is-open");
  elements.previewModal.setAttribute("aria-hidden", "true");
  state.previewId = "";
  syncModalOpenState();
}

async function copyText(value) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function copyResourceLink() {
  const resource = findResource(state.previewId);
  if (!resource || !["server", "supabase"].includes(state.mode) || !resource.url) {
    showToast("当前资源没有可复制的链接", "浏览器本地模式不提供公开链接", "error");
    return;
  }
  try {
    const link = new URL(resource.url, window.location.href).href;
    await copyText(link);
    showToast("资源链接已复制", link);
  } catch (error) {
    showToast("复制失败", "请手动复制资源地址", "error");
  }
}

function openEdit(id) {
  const resource = findResource(id);
  if (!resource) {
    return;
  }
  elements.editTitle.textContent = `编辑“${resource.name}”`;
  elements.editStatus.textContent = "";
  elements.editForm.elements.id.value = resource.id;
  elements.editForm.elements.name.value = resource.name;
  setSelectValue(elements.editForm.elements.category, resource.category);
  elements.editForm.elements.tags.value = resource.tags.join(", ");
  elements.editForm.elements.description.value = resource.description || "";
  elements.editModal.classList.add("is-open");
  elements.editModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => elements.editForm.elements.name.focus(), 0);
}

function setSelectValue(select, value) {
  const exists = [...select.options].some((option) => option.value === value);
  if (!exists && value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
  select.value = value || "其他";
}

function closeEdit() {
  elements.editModal.classList.remove("is-open");
  elements.editModal.setAttribute("aria-hidden", "true");
  elements.editStatus.textContent = "";
  syncModalOpenState();
}

async function saveEdit(event) {
  event.preventDefault();
  const resource = findResource(elements.editForm.elements.id.value);
  if (!resource) {
    elements.editStatus.textContent = "资源不存在，请刷新列表后重试。";
    return;
  }

  const name = elements.editForm.elements.name.value.trim();
  if (!name) {
    elements.editStatus.textContent = "文件名称不能为空。";
    return;
  }

  const updates = {
    name,
    category: elements.editForm.elements.category.value || "其他",
    tags: elements.editForm.elements.tags.value.split(/[,，]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 8),
    description: elements.editForm.elements.description.value.trim(),
    kind: getKind({ name, type: resource.mime })
  };

  elements.saveEditButton.disabled = true;
  elements.saveEditButton.textContent = "正在保存";
  elements.editStatus.textContent = "";

  try {
    let savedResource;
    if (state.mode === "server") {
      const response = await fetchWithTimeout(`${API_BASE}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: resource.id, ...updates })
      }, 10000);
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.resource) {
        throw new Error(payload.error || "保存失败");
      }
      savedResource = payload.resource;
    } else if (state.mode === "supabase") {
      const response = await fetchWithTimeout(
        `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?id=eq.${encodeURIComponent(resource.id)}`,
        {
          method: "PATCH",
          headers: supabaseHeaders({
            "Content-Type": "application/json",
            Prefer: "return=representation"
          }),
          body: JSON.stringify(updates)
        },
        12000
      );
      if (!response.ok) {
        const detail = await response.text();
        throw new Error(`保存失败：${detail.slice(0, 140)}`);
      }
      const updated = await response.json();
      savedResource = Array.isArray(updated) ? updated[0] : { ...resource, ...updates };
    } else {
      savedResource = { ...resource, ...updates };
      await putLocalResource(savedResource);
    }

    state.resources = state.resources.map((entry) => (
      entry.id === resource.id ? normalizeResource(savedResource) : entry
    ));
    closeEdit();
    renderAll();
    showToast("资源信息已更新", name);
  } catch (error) {
    elements.editStatus.textContent = error.message || "保存失败，请稍后重试。";
  } finally {
    elements.saveEditButton.disabled = false;
    elements.saveEditButton.textContent = "保存修改";
  }
}

function askDelete(ids) {
  const deleteIds = [...new Set(Array.isArray(ids) ? ids : [ids])]
    .filter((id) => findResource(id));
  if (!deleteIds.length) {
    return;
  }
  state.pendingDeleteIds = deleteIds;
  const resource = findResource(deleteIds[0]);
  elements.confirmTitle.textContent = deleteIds.length === 1
    ? `删除“${resource.name}”？`
    : `删除已选的 ${deleteIds.length} 个资源？`;
  elements.confirmDescription.textContent = "文件及其元数据会从资源库中移除，此操作无法撤销。";
  elements.confirmModal.classList.add("is-open");
  elements.confirmModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDeleteConfirm() {
  state.pendingDeleteIds = [];
  elements.confirmModal.classList.remove("is-open");
  elements.confirmModal.setAttribute("aria-hidden", "true");
  syncModalOpenState();
}

function syncModalOpenState() {
  const hasOpenModal = Boolean(document.querySelector(".modal.is-open"));
  document.body.classList.toggle("modal-open", hasOpenModal);
}

async function deleteResources(ids) {
  const deleteIds = [...new Set(ids)].filter((id) => findResource(id));
  if (!deleteIds.length) {
    return;
  }

  elements.confirmDeleteButton.disabled = true;
  elements.confirmDeleteButton.textContent = "正在删除";
  const deletedIds = [];
  const failed = [];

  try {
    for (const id of deleteIds) {
      try {
        if (state.mode === "server") {
          const response = await fetchWithTimeout(`${API_BASE}/delete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
          }, 10000);
          const payload = await response.json().catch(() => ({}));
          if (!response.ok || !payload.deleted) {
            throw new Error(payload.error || "删除失败");
          }
        } else if (state.mode === "supabase") {
          const resource = findResource(id);
          if (resource?.storage === "browser") {
            await removeLocalResource(id);
          } else {
            await removeSupabaseObject(resource);
            const response = await fetchWithTimeout(
              `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?id=eq.${encodeURIComponent(id)}`,
              {
                method: "DELETE",
                headers: supabaseHeaders({ Prefer: "return=minimal" })
              },
              12000
            );
            if (!response.ok) {
              const detail = await response.text();
              throw new Error(`删除失败：${detail.slice(0, 140)}`);
            }
          }
        } else {
          await removeLocalResource(id);
        }
        deletedIds.push(id);
      } catch (error) {
        failed.push(id);
      }
    }

    deletedIds.forEach(revokeObjectUrl);
    state.resources = state.resources.filter((entry) => !deletedIds.includes(entry.id));
    deletedIds.forEach((id) => state.selectedIds.delete(id));
    closeDeleteConfirm();
    renderAll();
    if (failed.length) {
      showToast("部分资源删除失败", `${deletedIds.length} 个成功，${failed.length} 个失败`, "error");
    } else {
      showToast("资源已删除", `共移除 ${deletedIds.length} 个资源`);
    }
  } catch (error) {
    showToast("删除失败", error.message || "请稍后重试", "error");
  } finally {
    elements.confirmDeleteButton.disabled = false;
    elements.confirmDeleteButton.textContent = "确认删除";
  }
}

async function decompressBlob(blob) {
  if (typeof DecompressionStream !== "function") {
    throw new Error("当前浏览器不支持恢复压缩文件");
  }
  const decompressedStream = blob.stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(decompressedStream).blob();
}

function saveBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = filename || "resource";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 12000);
}

async function downloadResource(id) {
  const resource = findResource(id);
  if (!resource) {
    return;
  }

  if (state.mode === "supabase" && resource.url) {
    try {
      showToast(
        resource.chunked ? "正在合并分片" : "正在下载到本地",
        resource.compressed ? "下载前会自动恢复原文件" : resource.name
      );
      let downloadedBlob;
      if (resource.chunked) {
        const partBlobs = [];
        for (const partPath of resource.chunkParts) {
          const partResponse = await fetchWithTimeout(supabasePublicFileUrl(partPath), {}, 120000);
          if (!partResponse.ok) {
            throw new Error("云端分片读取失败");
          }
          partBlobs.push(await partResponse.blob());
        }
        downloadedBlob = new Blob(partBlobs, {
          type: resource.compressed ? "application/gzip" : resource.originalMime
        });
      } else {
        const response = await fetchWithTimeout(resource.url, {}, 120000);
        if (!response.ok) {
          throw new Error("云端文件读取失败");
        }
        downloadedBlob = await response.blob();
      }
      const originalBlob = resource.compressed ? await decompressBlob(downloadedBlob) : downloadedBlob;
      saveBlob(originalBlob, resource.originalName || resource.name);
      showToast(resource.compressed ? "原文件已恢复并保存" : "文件已保存到本地", resource.originalName || resource.name);
    } catch (error) {
      showToast("下载失败", error.message || "无法恢复原文件", "error");
    }
    return;
  }

  const url = getObjectUrl(resource);
  if (!url) {
    showToast("无法下载", "资源地址不可用", "error");
    return;
  }

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = resource.name || "resource";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  showToast("已开始下载", resource.name);
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const active = tab.dataset.filter === filter;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderResources();
}

function bindEvents() {
  elements.adminButton.addEventListener("click", () => {
    if (state.isAdmin) {
      setAdminMode(false);
    } else {
      openAdminModal();
    }
  });
  elements.adminForm.addEventListener("submit", submitAdmin);
  elements.chooseFilesButton.addEventListener("click", (event) => {
    event.stopPropagation();
    elements.fileInput.click();
  });
  elements.clipboardButton.addEventListener("click", (event) => {
    event.stopPropagation();
    addFromClipboard();
  });
  elements.dropZone.addEventListener("click", () => elements.fileInput.click());
  elements.dropZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      elements.fileInput.click();
    }
  });
  elements.dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    elements.dropZone.classList.add("is-dragging");
  });
  elements.dropZone.addEventListener("dragleave", () => {
    elements.dropZone.classList.remove("is-dragging");
  });
  elements.dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    elements.dropZone.classList.remove("is-dragging");
    addFiles(event.dataTransfer.files);
  });
  elements.fileInput.addEventListener("change", () => {
    addFiles(elements.fileInput.files);
    elements.fileInput.value = "";
  });

  elements.queueList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-queue]");
    if (removeButton) {
      removeQueueItem(removeButton.dataset.removeQueue);
    }
  });
  elements.clearQueueButton.addEventListener("click", clearQueue);
  elements.uploadButton.addEventListener("click", startUpload);

  elements.searchInput.addEventListener("input", () => {
    state.search = elements.searchInput.value;
    renderResources();
  });
  elements.sortSelect.addEventListener("change", () => {
    state.sort = elements.sortSelect.value;
    renderResources();
  });
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => setFilter(tab.dataset.filter));
  });
  elements.selectAllInput.addEventListener("change", () => {
    setVisibleSelection(elements.selectAllInput.checked);
  });
  elements.clearSelectionButton.addEventListener("click", clearSelection);
  elements.bulkDeleteButton.addEventListener("click", () => askDelete([...state.selectedIds]));

  elements.resourceList.addEventListener("click", (event) => {
    const selectInput = event.target.closest("[data-select-resource]");
    if (selectInput) {
      toggleSelected(selectInput.dataset.selectResource, selectInput.checked);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) {
      const playableRow = event.target.closest(".resource-row.is-playable");
      if (playableRow) {
        openPreview(playableRow.dataset.resourceId);
      }
      return;
    }
    const id = action.dataset.id;
    if (action.dataset.action === "preview") {
      openPreview(id);
    } else if (action.dataset.action === "edit") {
      openEdit(id);
    } else if (action.dataset.action === "download") {
      downloadResource(id);
    } else if (action.dataset.action === "delete") {
      askDelete(id);
    }
  });
  elements.resourceList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const playableRow = event.target.closest(".resource-row.is-playable");
    if (playableRow && !event.target.closest("button, input, a")) {
      event.preventDefault();
      openPreview(playableRow.dataset.resourceId);
    }
  });

  elements.previewDownloadButton.addEventListener("click", () => {
    if (state.previewId) {
      downloadResource(state.previewId);
    }
  });
  elements.copyLinkButton.addEventListener("click", copyResourceLink);
  elements.editForm.addEventListener("submit", saveEdit);
  elements.confirmDeleteButton.addEventListener("click", () => {
    if (state.pendingDeleteIds.length) {
      deleteResources(state.pendingDeleteIds);
    }
  });

  document.querySelectorAll("[data-close-modal]").forEach((trigger) => {
    trigger.addEventListener("click", closePreview);
  });
  document.querySelectorAll("[data-close-confirm]").forEach((trigger) => {
    trigger.addEventListener("click", closeDeleteConfirm);
  });
  document.querySelectorAll("[data-close-edit]").forEach((trigger) => {
    trigger.addEventListener("click", closeEdit);
  });
  document.querySelectorAll("[data-close-admin]").forEach((trigger) => {
    trigger.addEventListener("click", closeAdminModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }
    if (elements.confirmModal.classList.contains("is-open")) {
      closeDeleteConfirm();
    } else if (elements.adminModal.classList.contains("is-open")) {
      closeAdminModal();
    } else if (elements.editModal.classList.contains("is-open")) {
      closeEdit();
    } else if (elements.previewModal.classList.contains("is-open")) {
      closePreview();
    }
  });
}

async function init() {
  hydrateIcons();
  elements.adminButtonText.textContent = state.isAdmin ? "退出管理" : "管理员";
  elements.adminButton.setAttribute("aria-label", state.isAdmin ? "退出管理员模式" : "管理员模式");
  elements.adminButton.classList.toggle("is-active", state.isAdmin);
  bindEvents();
  await detectStorageMode();
  try {
    await openDatabase();
  } catch (error) {
    setStorageMode("error");
    showToast("本地存储不可用", error.message || "浏览器拒绝创建数据库", "error");
    return;
  }
  await loadResources();
  startSupabaseKeepAlive();
  syncPendingCloudUploads();
}

init();
