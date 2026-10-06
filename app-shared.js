const ICONS = {
  "archive": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',
  "book-open": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
  "chevron-left": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  "chevron-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  "cloud-upload": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>',
  "clipboard-paste": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>',
  "code": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
  "copy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  "download": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
  "eye-off": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076A10.744 10.744 0 0 1 12 5c5 0 9 4 10 7a11.8 11.8 0 0 1-2.09 3.35"/><path d="M6.61 6.61A11.8 11.8 0 0 0 2 12c1 3 5 7 10 7a10.7 10.7 0 0 0 5.39-1.61"/><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path d="m2 2 20 20"/></svg>',
  "eye": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  "file": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
  "film": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7.5h4"/><path d="M17 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 16.5h4"/></svg>',
  "folder-open": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2A2 2 0 0 0 11.07 6H18a2 2 0 0 1 2 2v2"/></svg>',
  "folder-tree": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2a1 1 0 0 0-.8-.4h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"/><path d="M3 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5"/><path d="M6 5H3"/></svg>',
  "image": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  "music": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  "maximize": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
  "minimize": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>',
  "minus": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  "package-open": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M15.17 2.21 12 5.38 8.83 2.21 3.77 5.25A2 2 0 0 0 2.72 7v10a2 2 0 0 0 1.05 1.76l7 4A2 2 0 0 0 12 22a2 2 0 0 0 1.23-.24l7-4A2 2 0 0 0 21.28 17V7a2 2 0 0 0-1.05-1.75Z"/><path d="m7 8 5 3 5-3"/><path d="m7 13 5 3 5-3"/></svg>',
  "pencil": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>',
  "plus": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  "search": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  "repeat": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>',
  "shuffle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/></svg>',
  "shield": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
  "skip-back": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20 9 12l10-8v16Z"/><path d="M5 19V5"/></svg>',
  "skip-forward": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5 4 10 8-10 8V4Z"/><path d="M19 5v14"/></svg>',
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
  folder: { label: "文件夹", icon: "folder-tree" },
  model: { label: "3D 模型", icon: "package-open" },
  other: { label: "其他", icon: "file" }
};

const API_BASE = "./api";
const DB_NAME = "resource-hub-v1";
const DB_STORE = "resources";
const RESOURCE_CACHE_KEY = "qingzhi_resource_cache_v1";
const RESOURCE_CACHE_LIMIT = 300;
const SERVER_LIMIT = 250 * 1024 * 1024;
const LOCAL_LIMIT = 2 * 1024 * 1024 * 1024;
const SUPABASE_SOURCE_LIMIT = 2 * 1024 * 1024 * 1024;
const SUPABASE_UPLOAD_LIMIT = 100 * 1024 * 1024;
const READER_PAGE_SIZE = 1000000;
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

function readResourceCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(RESOURCE_CACHE_KEY) || "[]");
    return Array.isArray(cached) ? cached : [];
  } catch (error) {
    return [];
  }
}

function writeResourceCache(resources) {
  try {
    const compact = resources
      .filter((resource) => resource.storage !== "browser")
      .slice(0, RESOURCE_CACHE_LIMIT)
      .map((resource) => ({
        id: resource.id,
        name: resource.name,
        tags: resource.tags || [],
        description: resource.description || "",
        category: resource.category || "public",
        kind: resource.kind,
        mime: resource.mime,
        size: resource.size,
        original_size: resource.originalSize || resource.size,
        file_url: resource.url || resource.file_url || "",
        file_path: resource.filePath || resource.file_path || "",
        uploaded_at: resource.uploadedAt || resource.uploaded_at
      }));
    localStorage.setItem(RESOURCE_CACHE_KEY, JSON.stringify(compact));
  } catch (error) {
    // Cache failures should never block resource loading.
  }
}

const state = {
  mode: "detecting",
  resources: [],
  queue: [],
  filter: "all",
  search: "",
  sort: "newest",
  page: 1,
  pageSize: 5,
  supabaseTotal: 0,
  supabaseTotalSize: 0,
  cloudOffline: false,
  activeUpload: false,
  syncingPending: false,
  cloudRetryTimer: null,
  searchTimer: null,
  isAdmin: readAdminSession(),
  selectedIds: new Set(),
  pendingDeleteIds: [],
  previewId: "",
  previewResource: null,
  previewHandoff: false,
  previewObjectUrl: "",
  previewReading: false,
  readerId: "",
  readerResource: null,
  readerReading: true,
  readerFontScale: 1,
  readerPages: [],
  readerPageIndex: 0,
  textDocumentCache: new Map(),
  audioPlaylist: [],
  audioIndex: -1,
  audioMode: "sequence",
  audioLibrary: [],
  audioLibraryLoaded: false,
  audioCovers: new Map(),
  objectUrls: new Map(),
  videoThumbs: new Map(),
  db: null
};

const elements = {
  adminButton: document.getElementById("adminButton"),
  adminButtonText: document.getElementById("adminButtonText"),
  dropZone: document.getElementById("dropZone"),
  fileInput: document.getElementById("fileInput"),
  folderInput: document.getElementById("folderInput"),
  chooseFilesButton: document.getElementById("chooseFilesButton"),
  chooseFolderButton: document.getElementById("chooseFolderButton"),
  clipboardButton: document.getElementById("clipboardButton"),
  resourceNameInput: document.getElementById("resourceNameInput"),
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
  pagination: document.getElementById("pagination"),
  previousPageButton: document.getElementById("previousPageButton"),
  nextPageButton: document.getElementById("nextPageButton"),
  pageNumbers: document.getElementById("pageNumbers"),
  pageSummary: document.getElementById("pageSummary"),
  pageJumpInput: document.getElementById("pageJumpInput"),
  pageJumpButton: document.getElementById("pageJumpButton"),
  emptyState: document.getElementById("emptyState"),
  emptyTitle: document.getElementById("emptyTitle"),
  emptyDescription: document.getElementById("emptyDescription"),
  previewModal: document.getElementById("previewModal"),
  previewTitle: document.getElementById("previewTitle"),
  previewArea: document.getElementById("previewArea"),
  previewMeta: document.getElementById("previewMeta"),
  previewPanel: document.querySelector("#previewModal .modal__panel--preview"),
  previewReadButton: document.getElementById("previewReadButton"),
  previewFullscreenButton: document.getElementById("previewFullscreenButton"),
  previewDownloadButton: document.getElementById("previewDownloadButton"),
  copyLinkButton: document.getElementById("copyLinkButton"),
  readerView: document.getElementById("readerView"),
  readerPanel: document.getElementById("readerPanel"),
  readerTitle: document.getElementById("readerTitle"),
  readerBody: document.getElementById("readerBody"),
  readerText: document.getElementById("readerText"),
  readerEmbed: document.getElementById("readerEmbed"),
  readerFrame: document.getElementById("readerFrame"),
  readerEmbedEmpty: document.getElementById("readerEmbedEmpty"),
  readerBackButton: document.getElementById("readerBackButton"),
  readerFontDownButton: document.getElementById("readerFontDownButton"),
  readerFontUpButton: document.getElementById("readerFontUpButton"),
  readerScale: document.getElementById("readerScale"),
  readerReadingButton: document.getElementById("readerReadingButton"),
  readerFullscreenButton: document.getElementById("readerFullscreenButton"),
  readerDownloadButton: document.getElementById("readerDownloadButton"),
  readerPager: document.getElementById("readerPager"),
  readerPrevButton: document.getElementById("readerPrevButton"),
  readerNextButton: document.getElementById("readerNextButton"),
  readerPageIndicator: document.getElementById("readerPageIndicator"),
  audioRestoreButton: document.getElementById("audioRestoreButton"),
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
  if (file?.resourceKind) {
    return file.resourceKind;
  }
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

function fileDisplayPath(file) {
  return file.relativePath || file.webkitRelativePath || file.name;
}

function readDirectoryEntries(directoryEntry) {
  return new Promise((resolve, reject) => {
    const reader = directoryEntry.createReader();
    const entries = [];
    const readBatch = () => {
      reader.readEntries((batch) => {
        if (!batch.length) {
          resolve(entries);
          return;
        }
        entries.push(...batch);
        readBatch();
      }, reject);
    };
    readBatch();
  });
}

async function traverseFileEntry(entry, parentPath = "") {
  const currentPath = parentPath ? `${parentPath}/${entry.name}` : entry.name;
  if (entry.isFile) {
    const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
    Object.defineProperty(file, "relativePath", {
      value: currentPath,
      enumerable: true,
      configurable: true
    });
    return [file];
  }
  if (entry.isDirectory) {
    const entries = await readDirectoryEntries(entry);
    const files = [];
    for (const child of entries) {
      files.push(...await traverseFileEntry(child, currentPath));
    }
    return files;
  }
  return [];
}

async function filesFromDataTransfer(dataTransfer) {
  const entries = [];
  for (const item of [...(dataTransfer.items || [])]) {
    if (item.kind !== "file" || typeof item.webkitGetAsEntry !== "function") {
      continue;
    }
    const entry = item.webkitGetAsEntry();
    if (entry) {
      entries.push(entry);
    }
  }
  if (!entries.length) {
    return [...(dataTransfer.files || [])];
  }
  const files = [];
  for (const entry of entries) {
    files.push(...await traverseFileEntry(entry));
  }
  return files;
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

function getDocumentPreviewType(resource) {
  const name = String(resource.name || "").toLowerCase();
  const mime = String(resource.mime || "").toLowerCase();
  const extension = name.includes(".") ? name.split(".").pop() : "";
  if (isPdf(resource)) {
    return "pdf";
  }
  if (
    ["doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(extension)
    || mime.includes("wordprocessingml")
    || mime.includes("spreadsheetml")
    || mime.includes("presentationml")
  ) {
    return "office";
  }
  if (
    ["txt", "md", "csv", "json", "xml", "yaml", "yml", "log", "ini", "tsv"].includes(extension)
    || mime.startsWith("text/")
    || mime.includes("json")
    || mime.includes("xml")
  ) {
    return "text";
  }
  return "";
}

function decodeTextBuffer(buffer, contentType = "") {
  const bytes = new Uint8Array(buffer);
  if (bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes.subarray(3));
  }
  if (bytes.length >= 2 && bytes[0] === 0xff && bytes[1] === 0xfe) {
    return new TextDecoder("utf-16le", { fatal: true }).decode(bytes.subarray(2));
  }
  if (bytes.length >= 2 && bytes[0] === 0xfe && bytes[1] === 0xff) {
    return new TextDecoder("utf-16be", { fatal: true }).decode(bytes.subarray(2));
  }

  const charsetMatch = String(contentType).match(/charset\s*=\s*["']?([^;"'\s]+)/i);
  const preferred = charsetMatch ? charsetMatch[1].toLowerCase() : "";
  const candidates = [
    preferred,
    "utf-8",
    "gb18030",
    "big5",
    "shift_jis",
    "utf-16le",
    "utf-16be"
  ].filter((value, index, list) => value && list.indexOf(value) === index);

  for (const encoding of candidates) {
    try {
      return new TextDecoder(encoding, { fatal: true }).decode(bytes);
    } catch (error) {
      // Try the next encoding.
    }
  }
  return new TextDecoder("utf-8").decode(bytes);
}

async function readTextDocument(resource) {
  const url = getObjectUrl(resource);
  if (!url) {
    throw new Error("无法读取文档内容。");
  }
  const response = await fetchWithTimeout(url, { cache: "no-store" }, 120000);
  if (!response.ok && response.status !== 0) {
    throw new Error("文档读取失败");
  }
  const contentType = response.headers.get("content-type") || resource.mime || "";
  let buffer = await response.arrayBuffer();
  const head = new Uint8Array(buffer, 0, Math.min(buffer.byteLength, 2));
  if (head.length === 2 && head[0] === 0x1f && head[1] === 0x8b) {
    const decompressedBlob = await decompressBlob(new Blob([buffer]));
    buffer = await decompressedBlob.arrayBuffer();
  }
  let text = decodeTextBuffer(buffer, contentType);
  if (String(resource.name || "").toLowerCase().endsWith(".json")) {
    try {
      text = JSON.stringify(JSON.parse(text), null, 2);
    } catch (error) {
      // Keep the original text if JSON parsing fails.
    }
  }
  return text;
}

async function loadTextDocumentPreview(resource) {
  const target = elements.previewArea.querySelector("[data-document-preview]");
  if (!target) {
    return;
  }
  try {
    const text = await readTextDocument(resource);
    state.textDocumentCache.set(resource.id, text);
    while (state.textDocumentCache.size > 5) {
      state.textDocumentCache.delete(state.textDocumentCache.keys().next().value);
    }
    if (!elements.previewArea.contains(target)) {
      return;
    }
    target.textContent = text.length > READER_PAGE_SIZE
      ? `${text.slice(0, READER_PAGE_SIZE)}\n\n…内容较长，点击上方「阅读模式」分页查看完整内容。`
      : text;
  } catch (error) {
    if (elements.previewArea.contains(target)) {
      target.textContent = error.message || "文档读取失败";
    }
  }
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

function showProgressToast(title, detail = "") {
  hydrateIcons(elements.toastRegion);
  const toast = document.createElement("div");
  toast.className = "toast toast--progress";
  toast.innerHTML = `
    <span data-icon="download"></span>
    <div class="toast__progress-content">
      <div class="toast__progress-copy">
        <strong>${escapeHTML(title)}</strong>
        <span>${escapeHTML(detail)}</span>
      </div>
      <div class="toast__progress-track" aria-hidden="true"><span></span></div>
      <div class="toast__progress-meta">
        <span class="toast__progress-percent">0%</span>
        <span class="toast__progress-detail">${escapeHTML(detail)}</span>
      </div>
    </div>
  `;
  hydrateIcons(toast);
  elements.toastRegion.appendChild(toast);

  const titleNode = toast.querySelector(".toast__progress-copy strong");
  const copyDetail = toast.querySelector(".toast__progress-copy > span");
  const track = toast.querySelector(".toast__progress-track > span");
  const percentNode = toast.querySelector(".toast__progress-percent");
  const detailNode = toast.querySelector(".toast__progress-detail");
  let removalTimer = null;

  const update = (percent, nextDetail = detail) => {
    const value = Math.max(0, Math.min(100, Number(percent) || 0));
    track.style.width = `${value}%`;
    percentNode.textContent = `${Math.round(value)}%`;
    if (nextDetail) {
      detailNode.textContent = nextDetail;
      copyDetail.textContent = nextDetail;
    }
  };

  const finish = (success, nextTitle, nextDetail) => {
    window.clearTimeout(removalTimer);
    toast.classList.add(success ? "toast--success" : "toast--error");
    titleNode.textContent = nextTitle;
    update(100, nextDetail);
    removalTimer = window.setTimeout(() => {
      toast.classList.add("is-leaving");
      window.setTimeout(() => toast.remove(), 200);
    }, success ? 3000 : 5000);
  };

  update(0, detail);
  return {
    update,
    complete: (nextTitle, nextDetail) => finish(true, nextTitle, nextDetail),
    fail: (nextTitle, nextDetail) => finish(false, nextTitle, nextDetail)
  };
}

function fetchBlobWithProgress(url, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onprogress = (event) => {
      onProgress?.(event.loaded, event.lengthComputable ? event.total : 0);
    };
    xhr.onload = () => {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
        resolve(xhr.response);
        return;
      }
      reject(new Error(`文件读取失败（${xhr.status}）`));
    };
    xhr.onerror = () => reject(new Error("网络连接中断"));
    xhr.onabort = () => reject(new Error("下载已取消"));
    xhr.send();
  });
}

function setAdminMode(enabled) {
  state.isAdmin = enabled;
  writeAdminSession(enabled);
  elements.adminButtonText.textContent = enabled ? "退出管理" : "管理员";
  elements.adminButton.setAttribute("aria-label", enabled ? "退出管理模式" : "管理员模式");
  elements.adminButton.classList.toggle("is-active", enabled);
  state.selectedIds.clear();
  state.page = 1;
  if (state.mode === "supabase" && !state.cloudOffline) {
    loadSupabasePage();
  } else {
    renderResources();
  }
  showToast(enabled ? "管理模式已开启" : "管理模式已退出", enabled ? "现在可以编辑和删除文件" : "当前为访客模式");
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

async function detectStorageMode() {
  if (window.location.protocol === "file:") {
    state.mode = "local";
    return;
  }

  if (SUPABASE_ENABLED && window.location.protocol === "https:") {
    state.mode = "supabase";
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
    state.mode = "server";
  } catch (error) {
    state.mode = SUPABASE_ENABLED ? "supabase" : "local";
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
    return Promise.reject(new Error("当前环境不支持文件暂存"));
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
    request.onerror = () => reject(request.error || new Error("无法打开存储"));
  });
}

function databaseRequest(mode, operation) {
  return openDatabase().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE, mode);
    const store = transaction.objectStore(DB_STORE);
    const request = operation(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("存储操作失败"));
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

function buildSupabasePageUrl() {
  const params = new URLSearchParams();
  const offset = (state.page - 1) * state.pageSize;
  params.set("select", "id,name,category,tags,description,kind,mime,size,original_size,file_url,file_path,uploaded_at");
  params.set("limit", String(state.pageSize));
  params.set("offset", String(offset));

  if (state.sort === "oldest") {
    params.set("order", "uploaded_at.asc");
  } else if (state.sort === "name") {
    params.set("order", "name.asc");
  } else if (state.sort === "size") {
    params.set("order", "size.desc");
  } else {
    params.set("order", "uploaded_at.desc");
  }

  if (state.filter !== "all") {
    if (state.filter === "other") {
      params.set("kind", "in.(folder,model,code,other)");
    } else {
      params.set("kind", `eq.${state.filter}`);
    }
  }

  const search = state.search.trim();
  const conditions = [];
  if (search) {
    const escaped = search.replace(/[(),{}]/g, " ").slice(0, 80);
    conditions.push(`or(name.ilike.*${escaped}*,description.ilike.*${escaped}*,tags.cs.{${escaped}})`);
  }
  if (conditions.length) {
    params.set("and", `(${conditions.join(",")})`);
  }
  return `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?${params.toString()}`;
}

async function loadSupabaseFilteredStats() {
  const countUrl = new URL(buildSupabasePageUrl());
  countUrl.searchParams.set("select", "size");
  countUrl.searchParams.delete("limit");
  countUrl.searchParams.delete("offset");
  countUrl.searchParams.delete("order");
  const response = await fetchWithTimeout(countUrl.toString(), {
    headers: supabaseHeaders(),
    cache: "no-store"
  }, 15000);
  if (!response.ok) {
    return { count: 0, totalSize: 0 };
  }
  const rows = await response.json();
  const items = Array.isArray(rows) ? rows : [];
  return {
    count: items.length,
    totalSize: items.reduce((sum, row) => sum + (Number(row.size) || 0), 0)
  };
}

async function loadSupabasePage() {
  if (state.mode !== "supabase") {
    return;
  }
  try {
    if (state.page === 1 && !state.resources.length) {
      const cachedResources = readResourceCache();
      if (cachedResources.length) {
        state.resources = cachedResources
          .slice(0, state.pageSize)
          .map(normalizeResource)
          .filter(Boolean);
        state.supabaseTotal = Number(localStorage.getItem(`${RESOURCE_CACHE_KEY}_total`)) || state.resources.length;
        state.supabaseTotalSize = Number(localStorage.getItem(`${RESOURCE_CACHE_KEY}_total_size`)) || 0;
        renderAll();
      }
    }

    const statsPromise = loadSupabaseFilteredStats();
    const response = await fetchWithTimeout(buildSupabasePageUrl(), {
      headers: supabaseHeaders({ Prefer: "count=exact" }),
      cache: "no-store"
    }, 15000);
    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Supabase table unavailable: ${detail.slice(0, 120)}`);
    }
    const stats = await statsPromise;
    state.supabaseTotal = stats.count;
    state.supabaseTotalSize = stats.totalSize;
    state.cloudOffline = false;
    const pageResources = await response.json();
    state.resources = pageResources.map((resource) => normalizeResource({
      ...resource,
      url: resource.file_url,
      filePath: resource.file_path,
      uploadedAt: resource.uploaded_at
    })).filter(Boolean);
    writeResourceCache(state.resources);
    try {
      localStorage.setItem(`${RESOURCE_CACHE_KEY}_total`, String(state.supabaseTotal));
      localStorage.setItem(`${RESOURCE_CACHE_KEY}_total_size`, String(state.supabaseTotalSize));
    } catch (error) {
      // Ignore cache write failures.
    }
    state.selectedIds.clear();
    renderAll();
  } catch (error) {
    state.cloudOffline = true;
    const localResources = (await getAllLocalResources())
      .map(normalizeResource)
      .filter(Boolean);
    state.resources = localResources;
    renderAll();
    showToast("连接中断", "正在自动重试", "error");
    state.cloudRetryTimer = window.setTimeout(loadSupabasePage, 60000);
  }
}

async function loadResources() {
  if (state.cloudRetryTimer) {
    window.clearTimeout(state.cloudRetryTimer);
    state.cloudRetryTimer = null;
  }
  if (state.mode === "supabase") {
    await loadSupabasePage();
    return;
  }
  try {
    if (state.mode === "supabase" && !state.resources.length) {
      const cachedResources = readResourceCache();
      if (cachedResources.length) {
        state.resources = cachedResources
          .map(normalizeResource)
          .filter(Boolean);
        renderAll();
      }
    }
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
        `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?select=id,name,category,tags,description,kind,mime,size,file_url,file_path,uploaded_at&order=uploaded_at.desc`,
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
      writeResourceCache(resources);
      const pendingResources = (await getAllLocalResources())
        .filter((resource) => resource.pendingCloud === true)
        .map((resource) => ({ ...resource, storage: "browser", pendingCloud: true }));
      resources = [...pendingResources, ...resources];
    } else if (state.mode === "local") {
      resources = await getAllLocalResources();
    } else {
      throw new Error("存储暂不可用");
    }

    state.resources = resources
      .map(normalizeResource)
      .filter(Boolean);
    state.selectedIds.clear();
    state.page = 1;
    if (state.mode === "supabase") {
    }
    renderAll();
  } catch (error) {
    if (state.mode === "supabase") {
      try {
        await openDatabase();
        state.resources = (await getAllLocalResources())
          .map(normalizeResource)
          .filter(Boolean);
        state.selectedIds.clear();
        renderAll();
        showToast("连接中断", "正在自动重试", "error");
        state.cloudRetryTimer = window.setTimeout(loadResources, 60000);
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
  const compressed = resource.compressed === true
    || filePath.startsWith("compressed:")
    || filePath.endsWith(".qzg")
    || Boolean(manifest?.compressed);
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
    originalSize: Number(resource.original_size || resource.originalSize || resource.size) || 0,
    uploadedAt: resource.uploadedAt || resource.uploaded_at || new Date().toISOString()
  };
}

function renderAll() {
  renderSummary();
  renderResources();
}

function renderSummary() {
  const serverPaged = state.mode === "supabase" && !state.cloudOffline;
  const totalCount = serverPaged
    ? Math.max(state.supabaseTotal, state.resources.length)
    : state.resources.length;
  const totalSize = serverPaged
    ? state.supabaseTotalSize
    : state.resources.reduce((sum, resource) => sum + resource.size, 0);
  elements.resourceCount.textContent = `共 ${totalCount} 个资源 · ${formatBytes(totalSize)}`;
}

function filteredResources() {
  const search = state.search.trim().toLowerCase();
  const resources = state.resources.filter((resource) => {
    const matchesType = state.filter === "all"
      || (state.filter === "other" ? ["folder", "model", "code", "other"].includes(resource.kind) : resource.kind === state.filter);
    if (!matchesType) {
      return false;
    }
    if (!search) {
      return true;
    }
    const haystack = [
      resource.name,
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
    return `<span class="file-avatar file-avatar--image"><img src="${escapeHTML(url)}" alt="" loading="lazy" decoding="async"></span>`;
  }
  if (resource.kind === "video") {
    return `<span class="file-avatar file-avatar--video" data-video-thumb="${escapeHTML(resource.id)}" data-icon="film"></span>`;
  }
  if (resource.kind === "audio") {
    return `<span class="file-avatar file-avatar--audio" data-audio-cover="${escapeHTML(resource.id)}" data-icon="music"></span>`;
  }
  return `<span class="file-avatar file-avatar--${escapeHTML(resource.kind)}" data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>`;
}

async function getVideoThumbnail(resource) {
  if (!resource || resource.kind !== "video" || resource.chunked) {
    return "";
  }
  if (state.videoThumbs.has(resource.id)) {
    return state.videoThumbs.get(resource.id);
  }
  const url = getObjectUrl(resource);
  if (!url) {
    return "";
  }

  const waitForEvent = (video, eventName, timeout = 4000) => new Promise((resolve) => {
    let settled = false;
    if (eventName === "loadeddata" && video.readyState >= 2) {
      resolve(true);
      return;
    }
    const timer = window.setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve(false);
      }
    }, timeout);
    video.addEventListener(eventName, () => {
      if (!settled) {
        settled = true;
        window.clearTimeout(timer);
        resolve(true);
      }
    }, { once: true });
  });

  const seekVideo = (video, time) => new Promise((resolve) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve(false);
      }
    }, 2500);
    const onSeeked = () => {
      if (!settled) {
        settled = true;
        window.clearTimeout(timer);
        resolve(true);
      }
    };
    video.addEventListener("seeked", onSeeked, { once: true });
    try {
      video.currentTime = time;
    } catch (error) {
      window.clearTimeout(timer);
      settled = true;
      resolve(false);
    }
  });

  const captureFrame = (video) => {
    try {
      const width = video.videoWidth;
      const height = video.videoHeight;
      if (!width || !height) {
        return null;
      }

      const sample = document.createElement("canvas");
      sample.width = 32;
      sample.height = 18;
      const sampleContext = sample.getContext("2d", { willReadFrequently: true });
      if (!sampleContext) {
        return null;
      }
      sampleContext.drawImage(video, 0, 0, sample.width, sample.height);
      const pixels = sampleContext.getImageData(0, 0, sample.width, sample.height).data;
      let sum = 0;
      let sumSquares = 0;
      const count = pixels.length / 4;
      for (let index = 0; index < pixels.length; index += 4) {
        const luminance = pixels[index] * 0.2126 + pixels[index + 1] * 0.7152 + pixels[index + 2] * 0.0722;
        sum += luminance;
        sumSquares += luminance * luminance;
      }
      const average = sum / count;
      const deviation = Math.sqrt(Math.max(0, sumSquares / count - average * average));
      const useful = average > 18 && deviation > 10;

      const scale = Math.min(1, 480 / width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        return null;
      }
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      return {
        dataUrl: canvas.toDataURL("image/jpeg", 0.8),
        useful
      };
    } catch (error) {
      return null;
    }
  };

  const video = document.createElement("video");
  video.crossOrigin = "anonymous";
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.src = url;

  try {
    const metadataReady = await waitForEvent(video, "loadeddata");
    if (!metadataReady) {
      return "";
    }

    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const candidates = [
      0.1,
      0.5,
      1,
      2,
      duration * 0.1,
      duration * 0.25
    ]
      .map((time) => Math.max(0, Math.min(time, Math.max(0, duration - 0.05))))
      .filter((time, index, list) => list.indexOf(time) === index);

    let fallback = "";
    for (const time of candidates) {
      if (time > 0) {
        await seekVideo(video, time);
      }
      const frame = captureFrame(video);
      if (!frame) {
        continue;
      }
      if (!fallback) {
        fallback = frame.dataUrl;
      }
      if (frame.useful) {
        state.videoThumbs.set(resource.id, frame.dataUrl);
        return frame.dataUrl;
      }
    }

    if (fallback) {
      state.videoThumbs.set(resource.id, fallback);
    }
    return fallback;
  } finally {
    video.removeAttribute("src");
    video.load();
  }
}

async function hydrateVideoThumbnails(resources) {
  const videos = resources.filter((resource) => resource.kind === "video" && !resource.chunked);
  await Promise.all(videos.map(async (resource) => {
    const thumbnail = await getVideoThumbnail(resource);
    if (!thumbnail) {
      return;
    }
    const selector = `[data-video-thumb="${CSS.escape(resource.id)}"]`;
    document.querySelectorAll(selector).forEach((cover) => {
      cover.removeAttribute("data-icon");
      delete cover.dataset.iconReady;
      cover.innerHTML = `<img src="${escapeHTML(thumbnail)}" alt="" loading="lazy" decoding="async">`;
    });
  }));
}

async function hydrateAudioCovers(resources) {
  const audios = resources.filter((resource) => resource.kind === "audio" && !resource.chunked);
  await Promise.all(audios.map(async (resource) => {
    const cover = await getAudioCover(resource);
    if (!cover) {
      return;
    }
    const selector = `[data-audio-cover="${CSS.escape(resource.id)}"]`;
    document.querySelectorAll(selector).forEach((thumbnail) => {
      thumbnail.removeAttribute("data-icon");
      delete thumbnail.dataset.iconReady;
      thumbnail.classList.add("has-cover");
      thumbnail.innerHTML = `<img src="${escapeHTML(cover)}" alt="" loading="lazy" decoding="async">`;
    });
  }));
}

function renderResources() {
  const serverPaged = state.mode === "supabase" && !state.cloudOffline;
  const allResources = serverPaged ? state.resources : filteredResources();
  const totalResources = serverPaged
    ? Math.max(state.supabaseTotal, state.resources.length)
    : allResources.length;
  const totalPages = Math.max(1, Math.ceil(totalResources / state.pageSize));
  state.page = Math.min(Math.max(1, state.page), totalPages);
  const pageStart = (state.page - 1) * state.pageSize;
  const resources = serverPaged
    ? state.resources.slice(0, state.pageSize)
    : allResources.slice(pageStart, pageStart + state.pageSize);
  const hasAnyResources = totalResources > 0;
  state.selectedIds = new Set(
    [...state.selectedIds].filter((id) => state.resources.some((resource) => resource.id === id))
  );

  elements.resourceTable.hidden = !hasAnyResources;
  elements.emptyState.hidden = hasAnyResources;

  if (!hasAnyResources) {
    elements.emptyTitle.textContent = "还没有资源";
    elements.emptyDescription.textContent = "添加第一个文件后，它会显示在这里。";
    elements.resourceList.innerHTML = "";
    elements.pagination.hidden = true;
    syncSelection(resources);
    return;
  }

  if (!resources.length) {
    elements.emptyState.hidden = false;
    elements.resourceTable.hidden = true;
    elements.emptyTitle.textContent = "没有匹配的资源";
    elements.emptyDescription.textContent = "换一个关键词或资源类型试试。";
    elements.resourceList.innerHTML = "";
    elements.pagination.hidden = true;
    syncSelection(resources);
    return;
  }

  elements.resourceList.innerHTML = resources.map((resource) => {
    const tags = resource.tags.length ? ` · ${resource.tags.slice(0, 2).join(" / ")}` : "";
    const playable = true;
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
            <span title="${escapeHTML(resource.description || "")}">${escapeHTML(formatBytes(resource.originalSize || resource.size))} · ${escapeHTML(resource.mime || "未知类型")}${escapeHTML(tags)}</span>
          </div>
        </div>
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
  hydrateVideoThumbnails(resources);
  hydrateAudioCovers(resources);
  syncSelection(resources);
  renderPagination(totalPages, totalResources);
}

function renderPagination(totalPages, totalResources) {
  elements.pagination.hidden = totalResources <= state.pageSize;
  elements.pageSummary.textContent = `第 ${state.page} / ${totalPages} 页`;
  elements.pageJumpInput.max = String(totalPages);
  elements.pageJumpInput.value = String(state.page);
  elements.previousPageButton.disabled = state.page <= 1;
  elements.nextPageButton.disabled = state.page >= totalPages;

  const pages = [];
  const start = Math.max(1, state.page - 2);
  const end = Math.min(totalPages, start + 4);
  for (let page = start; page <= end; page += 1) {
    pages.push(`
      <button class="pagination__page ${page === state.page ? "is-active" : ""}" type="button" data-page="${page}" aria-label="第 ${page} 页" ${page === state.page ? 'aria-current="page"' : ""}>
        ${page}
      </button>
    `);
  }
  elements.pageNumbers.innerHTML = pages.join("");
}

function goToPage(page) {
  const maxPage = Math.max(1, Number(elements.pageJumpInput.max) || 1);
  const targetPage = Math.min(Math.max(1, Number(page) || 1), maxPage);
  elements.pageJumpInput.value = String(targetPage);
  if (targetPage === state.page) {
    return;
  }
  state.page = targetPage;
  if (state.mode === "supabase" && !state.cloudOffline) {
    loadSupabasePage();
  } else {
    renderResources();
  }
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
  const serverPaged = state.mode === "supabase" && !state.cloudOffline;
  const allResources = serverPaged ? state.resources : filteredResources();
  const pageStart = serverPaged ? 0 : (state.page - 1) * state.pageSize;
  allResources.slice(pageStart, pageStart + state.pageSize).forEach((resource) => {
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

const ZIP_CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    }
    table[index] = value >>> 0;
  }
  return table;
})();

function zipCrc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = ZIP_CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function zipDateTime(timestamp) {
  const date = new Date(timestamp || Date.now());
  const year = Math.max(1980, date.getFullYear());
  return {
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
  };
}

async function createFolderZip(folderName, files) {
  const encoder = new TextEncoder();
  const parts = [];
  const centralParts = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(fileDisplayPath(file).replace(/\\/g, "/"));
    const fileBytes = new Uint8Array(await file.arrayBuffer());
    const checksum = zipCrc32(fileBytes);
    const stamp = zipDateTime(file.lastModified);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, stamp.time, true);
    localView.setUint16(12, stamp.date, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, fileBytes.length, true);
    localView.setUint32(22, fileBytes.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localView.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    parts.push(localHeader, fileBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, stamp.time, true);
    centralView.setUint16(14, stamp.date, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, fileBytes.length, true);
    centralView.setUint32(24, fileBytes.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint16(30, 0, true);
    centralView.setUint16(32, 0, true);
    centralView.setUint16(34, 0, true);
    centralView.setUint16(36, 0, true);
    centralView.setUint32(38, 0, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);
    centralParts.push(centralHeader);

    offset += localHeader.length + fileBytes.length;
  }

  const centralOffset = offset;
  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endRecord = new Uint8Array(22);
  const endView = new DataView(endRecord.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(4, 0, true);
  endView.setUint16(6, 0, true);
  endView.setUint16(8, files.length, true);
  endView.setUint16(10, files.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, centralOffset, true);
  endView.setUint16(20, 0, true);

  const archive = new File([...parts, ...centralParts, endRecord], `${folderName}.zip`, {
    type: "application/zip",
    lastModified: Date.now()
  });
  Object.defineProperty(archive, "resourceKind", {
    value: "folder",
    enumerable: true,
    configurable: false
  });
  return archive;
}

async function addFiles(fileList) {
  const files = Array.from(fileList || []);
  const folderGroups = new Map();
  const plainFiles = [];

  files.forEach((file) => {
    const path = fileDisplayPath(file).replace(/\\/g, "/");
    const parts = path.split("/");
    if (parts.length > 1 && parts[0]) {
      const folderName = parts[0];
      if (!folderGroups.has(folderName)) {
        folderGroups.set(folderName, []);
      }
      folderGroups.get(folderName).push(file);
    } else {
      plainFiles.push(file);
    }
  });

  if (plainFiles.length) {
    addFilesDirect(plainFiles);
  }
  for (const [folderName, folderFiles] of folderGroups) {
    try {
      showToast("正在打包文件夹", `${folderName} · ${folderFiles.length} 个文件`);
      const archive = await createFolderZip(folderName, folderFiles);
      addFilesDirect([archive]);
    } catch (error) {
      showToast("文件夹打包失败", `${folderName}：${error.message || "内存不足"}`, "error");
    }
  }
}

function addFilesDirect(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) {
    return;
  }

  const cloudFileAllowed = SUPABASE_ENABLED && window.location.protocol === "https:";
  const limit = state.mode === "server"
    ? SERVER_LIMIT
    : cloudFileAllowed || state.mode === "supabase"
      ? SUPABASE_SOURCE_LIMIT
      : LOCAL_LIMIT;
  const queuedKeys = new Set(state.queue.map((item) => `${fileDisplayPath(item.file)}:${item.file.size}:${item.file.lastModified}`));
  const existingKeys = new Set(state.resources.map((resource) => `${resource.name}:${resource.size}`));
  let added = 0;
  let skipped = 0;

  files.forEach((file) => {
    const displayPath = fileDisplayPath(file);
    const key = `${displayPath}:${file.size}:${file.lastModified}`;
    const duplicateKey = `${displayPath}:${file.size}`;
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
      ? "超出大小限制的文件已跳过"
      : "重复、空文件或超出大小限制的文件已跳过";
    showToast("部分文件未加入", detail, "error");
  }
}

async function addFromClipboard() {
  if (!navigator.clipboard || typeof navigator.clipboard.read !== "function") {
    showToast("剪贴板不可用", "请允许浏览器访问剪贴板后重试", "error");
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
      ? `${item.phase || "上传中"} ${Math.round(item.progress)}%`
      : item.status === "done"
        ? "上传完成"
        : item.status === "error"
          ? item.error || "上传失败"
          : "等待上传";
    return `
      <div class="queue-item ${item.status === "done" ? "is-done" : ""} ${item.status === "error" ? "is-error" : ""}" data-queue-id="${escapeHTML(item.id)}">
        <span class="file-avatar file-avatar--${escapeHTML(item.kind)}" data-icon="${escapeHTML(typeIcon(item.kind))}"></span>
        <div class="queue-item__copy">
          <strong title="${escapeHTML(fileDisplayPath(item.file))}">${escapeHTML(fileDisplayPath(item.file))}</strong>
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
  const sourceName = fileDisplayPath(file);
  const name = customName
    ? (total > 1 ? `${customName} ${index + 1}` : customName)
    : sourceName;
  return {
    fileName: file.name,
    name,
    category: "其他",
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
    originalSize: item.file.size,
    uploadedAt: new Date().toISOString(),
    blob: item.file,
    storage: "browser",
    pendingCloud: options.pendingCloud === true
  };

  updateQueueItem(item.id, { progress: 42 });
  try {
    await putLocalResource(resource);
  } catch (storageError) {
    resource.sessionOnly = true;
    showToast("本地存储空间不足", "文件已保留在当前页面，可直接上传云端", "error");
  }
  updateQueueItem(item.id, { progress: 100 });
  return resource;
}

async function gzipFile(file) {
  if (typeof CompressionStream !== "function") {
    throw new Error("当前环境不支持文件压缩");
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
  const shouldAttempt = compressibleKinds.includes(getKind(file)) && file.size <= 300 * 1024 * 1024;
  if (!shouldAttempt) {
    return original;
  }

  try {
    const compressedFile = await gzipFile(file);
    if (file.size <= SUPABASE_UPLOAD_LIMIT && compressedFile.size >= file.size * 0.97) {
      return original;
    }
    if (compressedFile.size > SUPABASE_UPLOAD_LIMIT) {
      throw new Error(`压缩后仍为 ${formatBytes(compressedFile.size)}，超过 100 MB 上限`);
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
        retry(new Error(`上传失败（${xhr.status}）`));
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
    throw new Error("文件校验失败");
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
      : prepared.compressed
        ? `compressed:${uploadedPaths[0]}`
        : uploadedPaths[0];
    const row = {
      id,
      name: metadata.name || item.file.name,
      category: metadata.category,
      tags: metadata.tags,
      description: metadata.description,
      kind: item.kind,
      mime: prepared.originalMime,
      size: prepared.blob.size,
      original_size: prepared.originalSize,
      file_url: fileUrl,
      file_path: manifest
    };

    const insertRow = (payload) => fetchWithTimeout(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
      method: "POST",
      headers: supabaseHeaders({
        "Content-Type": "application/json",
        Prefer: "return=representation"
      }),
      body: JSON.stringify(payload)
    }, 20000);

    let response = await insertRow(row);
    if (!response.ok) {
      const detail = await response.text();
      if (detail.includes("original_size")) {
        // Older tables may not have the original_size column yet.
        const legacyRow = { ...row, size: prepared.originalSize };
        delete legacyRow.original_size;
        response = await insertRow(legacyRow);
        if (!response.ok) {
          const retryDetail = await response.text();
          throw new Error(`资源信息保存失败：${retryDetail.slice(0, 140)}`);
        }
      } else {
        throw new Error(`资源信息保存失败：${detail.slice(0, 140)}`);
      }
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
  const filePath = resource.filePath.startsWith("compressed:")
    ? resource.filePath.slice("compressed:".length)
    : resource.filePath;
  const manifest = parseChunkManifest(filePath);
  const paths = manifest
    ? manifest.parts
    : filePath.includes(",")
      ? filePath.split(",").filter(Boolean)
      : [filePath];
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
    } else if (state.mode === "supabase") {
      try {
        localRecord = await uploadLocally(item, metadata, { pendingCloud: true });
        state.resources = [normalizeResource(localRecord), ...state.resources];
        renderAll();
      } catch (localError) {
        localRecord = null;
        showToast("上传准备失败", "将直接上传文件", "error");
      }
      resource = await uploadToSupabase(item, metadata);
      if (localRecord) {
        await removeLocalResource(localRecord.id);
        state.resources = state.resources.filter((entry) => entry.id !== localRecord.id);
      }
    } else {
      resource = await uploadLocally(item, metadata, { pendingCloud: true });
    }
    const normalized = normalizeResource(resource);
    if (normalized.kind === "audio") {
      state.audioLibrary = [];
      state.audioLibraryLoaded = false;
    }
    if (state.mode === "supabase") {
      state.cloudOffline = false;
      state.page = 1;
      await loadSupabasePage();
    } else {
      state.resources = [normalized, ...state.resources.filter((entry) => entry.id !== normalized.id)];
    }
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
  const storedPending = (await getAllLocalResources())
    .filter((resource) => resource.pendingCloud === true && resource.blob);
  const storedIds = new Set(storedPending.map((resource) => resource.id));
  const memoryPending = state.resources.filter((resource) => (
    resource.storage === "browser"
    && resource.pendingCloud === true
    && resource.blob
    && !storedIds.has(resource.id)
  ));
  const pendingResources = [...storedPending, ...memoryPending];
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
    state.page = 1;
    if (state.mode === "supabase" && !state.cloudOffline) {
      await loadSupabasePage();
    } else {
      renderAll();
    }
    showToast("同步完成", `成功上传 ${syncedCount} 个资源`);
  }
}

async function startUpload() {
  if (state.activeUpload) {
    return;
  }

  const pending = state.queue.filter((item) => item.status === "ready" || item.status === "error");
  if (!pending.length) {
    showToast("没有待上传文件", "请先选择文件", "error");
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
    showToast(
      "全部上传完成",
      state.mode === "local"
        ? `${successCount} 个资源已保存，切换到在线后自动同步`
        : `${successCount} 个资源已上传`
    );
  } else if (successCount && failedCount) {
    showToast("上传部分完成", `${successCount} 个成功，${failedCount} 个失败`, "error");
  } else {
    showToast("上传失败", "请检查网络或文件大小后重试", "error");
  }
}

function findResource(id) {
  return state.resources.find((resource) => resource.id === id);
}

async function loadAudioLibrary(currentResource) {
  if (state.audioLibraryLoaded) {
    return;
  }
  let resources = [];
  if (state.mode === "supabase") {
    const params = new URLSearchParams();
    params.set("select", "id,name,category,tags,description,kind,mime,size,file_url,file_path,uploaded_at");
    params.set("kind", "eq.audio");
    params.set("order", "uploaded_at.asc");
    const response = await fetchWithTimeout(
      `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?${params.toString()}`,
      { headers: supabaseHeaders(), cache: "no-store" },
      15000
    );
    if (!response.ok) {
      throw new Error("音乐列表读取失败");
    }
    resources = await response.json();
    resources = resources.map((resource) => normalizeResource({
      ...resource,
      url: resource.file_url,
      filePath: resource.file_path,
      uploadedAt: resource.uploaded_at
    }));
  } else if (state.mode === "server") {
    resources = state.resources;
  } else {
    resources = await getAllLocalResources();
  }

  state.audioLibrary = resources
    .map(normalizeResource)
    .filter(Boolean)
    .filter((resource) => resource.kind === "audio" && !resource.chunked && getObjectUrl(resource));
  if (!state.audioLibrary.some((resource) => resource.id === currentResource.id)) {
    state.audioLibrary.unshift(currentResource);
  }
  state.audioLibraryLoaded = true;
}

function getAudioPlaylist(resource) {
  const playlist = state.audioLibrary.length
    ? [...state.audioLibrary]
    : state.resources.filter((entry) => (
      entry.kind === "audio"
      && !entry.chunked
      && getObjectUrl(entry)
    ));
  if (!playlist.some((entry) => entry.id === resource.id)) {
    playlist.unshift(resource);
  }
  return playlist;
}

function readSynchsafeInteger(bytes, offset) {
  return (
    ((bytes[offset] & 0x7f) << 21)
    | ((bytes[offset + 1] & 0x7f) << 14)
    | ((bytes[offset + 2] & 0x7f) << 7)
    | (bytes[offset + 3] & 0x7f)
  );
}

function readUint24(bytes, offset) {
  return (bytes[offset] << 16) | (bytes[offset + 1] << 8) | bytes[offset + 2];
}

function readUint32(bytes, offset) {
  return (
    bytes[offset] * 0x1000000
    + (bytes[offset + 1] << 16)
    + (bytes[offset + 2] << 8)
    + bytes[offset + 3]
  );
}

function findEncodedTerminator(bytes, start, encoding) {
  if (encoding === 1 || encoding === 2) {
    for (let index = start; index + 1 < bytes.length; index += 2) {
      if (bytes[index] === 0 && bytes[index + 1] === 0) {
        return index + 2;
      }
    }
    return -1;
  }
  const index = bytes.indexOf(0, start);
  return index < 0 ? -1 : index + 1;
}

function inferImageMime(bytes) {
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    return "image/jpeg";
  }
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return "image/png";
  }
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
    return "image/gif";
  }
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) {
    return "image/webp";
  }
  return "image/jpeg";
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("封面读取失败"));
    reader.readAsDataURL(blob);
  });
}

async function extractId3Cover(bytes) {
  if (bytes.length < 10 || bytes[0] !== 0x49 || bytes[1] !== 0x44 || bytes[2] !== 0x33) {
    return "";
  }
  const version = bytes[3];
  const flags = bytes[5];
  const tagSize = readSynchsafeInteger(bytes, 6);
  const tagEnd = Math.min(bytes.length, 10 + tagSize);
  let offset = 10;
  let bestImage = null;
  let bestMime = "";

  if ((flags & 0x40) && version >= 3 && offset + 4 <= tagEnd) {
    const extendedSize = version === 4
      ? readSynchsafeInteger(bytes, offset)
      : readUint32(bytes, offset);
    offset += version === 4 ? extendedSize : 4 + extendedSize;
  }

  while (offset + 10 <= tagEnd) {
    let frameId = "";
    let frameSize = 0;
    let headerSize = 10;
    if (version === 2) {
      if (offset + 6 > tagEnd) {
        break;
      }
      frameId = String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2]);
      frameSize = readUint24(bytes, offset + 3);
      headerSize = 6;
    } else {
      frameId = String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3]);
      frameSize = version === 4
        ? readSynchsafeInteger(bytes, offset + 4)
        : readUint32(bytes, offset + 4);
    }
    if (!frameId || frameSize <= 0 || offset + headerSize + frameSize > tagEnd) {
      break;
    }
    if (frameId === "APIC" || frameId === "PIC") {
      let payload = offset + headerSize;
      const encoding = bytes[payload];
      payload += 1;
      let mime = "";
      if (frameId === "APIC") {
        let boundary = payload;
        while (boundary < offset + headerSize + frameSize && bytes[boundary] !== 0) {
          mime += String.fromCharCode(bytes[boundary]);
          boundary += 1;
        }
        payload = boundary + 1;
      } else {
        const format = String.fromCharCode(bytes[payload], bytes[payload + 1], bytes[payload + 2]).toUpperCase();
        mime = format === "PNG" ? "image/png" : "image/jpeg";
        payload += 3;
      }
      payload += 1;
      const descriptionEnd = findEncodedTerminator(bytes, payload, encoding);
      if (descriptionEnd >= 0) {
        payload = descriptionEnd;
      }
      const imageEnd = offset + headerSize + frameSize;
      if (payload < imageEnd) {
        const imageBytes = bytes.slice(payload, imageEnd);
        if (!bestImage || imageBytes.length > bestImage.length) {
          bestImage = imageBytes;
          bestMime = mime || inferImageMime(imageBytes);
        }
      }
    }
    offset += headerSize + frameSize;
  }
  return bestImage ? blobToDataUrl(new Blob([bestImage], { type: bestMime })) : "";
}

async function extractFlacCover(bytes) {
  if (bytes.length < 8 || String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3]) !== "fLaC") {
    return "";
  }
  let offset = 4;
  while (offset + 4 <= bytes.length) {
    const header = bytes[offset];
    const isLast = Boolean(header & 0x80);
    const blockType = header & 0x7f;
    const blockSize = readUint24(bytes, offset + 1);
    const blockStart = offset + 4;
    const blockEnd = blockStart + blockSize;
    if (blockEnd > bytes.length) {
      break;
    }
    if (blockType === 6 && blockStart + 8 <= blockEnd) {
      let cursor = blockStart + 4;
      const mimeLength = readUint32(bytes, cursor);
      cursor += 4;
      const mime = new TextDecoder("ascii").decode(bytes.slice(cursor, cursor + mimeLength));
      cursor += mimeLength;
      const descriptionLength = readUint32(bytes, cursor);
      cursor += 4 + descriptionLength + 16;
      const imageLength = readUint32(bytes, cursor);
      cursor += 4;
      if (cursor + imageLength <= blockEnd) {
        const imageBytes = bytes.slice(cursor, cursor + imageLength);
        return blobToDataUrl(new Blob([imageBytes], { type: mime || inferImageMime(imageBytes) }));
      }
    }
    offset = blockEnd;
    if (isLast) {
      break;
    }
  }
  return "";
}

async function extractMp4Cover(bytes) {
  const marker = [0x63, 0x6f, 0x76, 0x72];
  for (let offset = 4; offset + 16 < bytes.length; offset += 1) {
    if (
      bytes[offset] !== marker[0]
      || bytes[offset + 1] !== marker[1]
      || bytes[offset + 2] !== marker[2]
      || bytes[offset + 3] !== marker[3]
    ) {
      continue;
    }
    const dataAtomOffset = offset + 4;
    const atomSize = readUint32(bytes, dataAtomOffset);
    const atomType = String.fromCharCode(
      bytes[dataAtomOffset + 4],
      bytes[dataAtomOffset + 5],
      bytes[dataAtomOffset + 6],
      bytes[dataAtomOffset + 7]
    );
    if (atomType !== "data" || atomSize < 16 || dataAtomOffset + atomSize > bytes.length) {
      continue;
    }
    const imageType = readUint32(bytes, dataAtomOffset + 8);
    const imageBytes = bytes.slice(dataAtomOffset + 16, dataAtomOffset + atomSize);
    const mime = imageType === 14 ? "image/png" : inferImageMime(imageBytes);
    return blobToDataUrl(new Blob([imageBytes], { type: mime }));
  }
  return "";
}

async function getAudioCover(resource) {
  if (!resource?.url) {
    return "";
  }
  if (state.audioCovers.has(resource.id)) {
    return state.audioCovers.get(resource.id);
  }
  try {
    const fetchRange = async (start, end) => {
      const headers = /^https?:/i.test(resource.url)
        ? { Range: `bytes=${start}-${end}` }
        : {};
      const response = await fetchWithTimeout(resource.url, {
        headers,
        cache: "no-store"
      }, 20000);
      return new Uint8Array(await response.arrayBuffer());
    };

    let bytes = await fetchRange(0, 131071);
    let cover = await extractId3Cover(bytes) || await extractFlacCover(bytes);

    if (!cover && bytes.length >= 10 && String.fromCharCode(bytes[0], bytes[1], bytes[2]) === "ID3") {
      const tagSize = 10 + readSynchsafeInteger(bytes, 6);
      if (tagSize > bytes.length && tagSize <= 6 * 1024 * 1024) {
        bytes = await fetchRange(0, tagSize - 1);
        cover = await extractId3Cover(bytes);
      }
    }

    if (!cover && bytes.length >= 4 && String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3]) === "fLaC") {
      const blockSize = readUint24(bytes, 5);
      const needed = 8 + blockSize;
      if (needed > bytes.length && needed <= 6 * 1024 * 1024) {
        bytes = await fetchRange(0, needed - 1);
        cover = await extractFlacCover(bytes);
      }
    }

    if (!cover && bytes.length >= 8 && String.fromCharCode(bytes[4], bytes[5], bytes[6], bytes[7]) === "ftyp") {
      const headBytes = await fetchRange(0, 2097151);
      cover = await extractMp4Cover(headBytes);
      if (!cover && Number(resource.size) > headBytes.length) {
        const tailStart = Math.max(0, Number(resource.size) - 1048576);
        const tailBytes = await fetchRange(tailStart, Number(resource.size) - 1);
        cover = await extractMp4Cover(tailBytes);
      }
    }

    if (cover) {
      state.audioCovers.set(resource.id, cover);
    }
    return cover;
  } catch (error) {
    return "";
  }
}

function renderAudioPlayer(resource) {
  const playlist = getAudioPlaylist(resource);
  state.audioPlaylist = playlist;
  state.audioIndex = Math.max(0, playlist.findIndex((entry) => entry.id === resource.id));
  const modeLabel = state.audioMode === "shuffle" ? "随机播放" : "顺序播放";
  const modeIcon = state.audioMode === "shuffle" ? "shuffle" : "repeat";
  return `
    <div class="audio-player" data-audio-player>
      <div class="audio-cover" aria-hidden="true">
        <span data-icon="music"></span>
      </div>
      <strong class="audio-player__title">${escapeHTML(resource.name)}</strong>
      <audio data-audio-element controls preload="metadata" src="${escapeHTML(getObjectUrl(resource))}"></audio>
      <div class="audio-player__controls">
        <button class="icon-button" type="button" data-audio-prev aria-label="上一首" title="上一首">
          <span data-icon="skip-back"></span>
        </button>
        <button class="button button-secondary" type="button" data-audio-mode aria-label="${modeLabel}" title="${modeLabel}">
          <span data-icon="${modeIcon}"></span>
          <span>${modeLabel}</span>
        </button>
        <button class="icon-button" type="button" data-audio-next aria-label="下一首" title="下一首">
          <span data-icon="skip-forward"></span>
        </button>
        <button class="icon-button audio-player__hide" type="button" data-audio-hide aria-label="隐藏播放器" title="隐藏播放器">
          <span data-icon="eye-off"></span>
        </button>
        <button class="icon-button audio-player__close" type="button" data-audio-close aria-label="关闭播放器" title="关闭播放器">
          <span data-icon="x"></span>
        </button>
      </div>
      <div class="audio-playlist" aria-label="播放列表">
        ${playlist.map((entry, index) => `
          <button class="audio-playlist__item ${index === state.audioIndex ? "is-active" : ""}" type="button" data-audio-track="${index}">
            <span class="audio-playlist__index">${index + 1}</span>
            <span class="audio-playlist__cover" data-audio-playlist-cover="${escapeHTML(entry.id)}" data-icon="music"></span>
            <strong>${escapeHTML(entry.name)}</strong>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function setupAudioPlayer() {
  const player = elements.previewArea.querySelector("[data-audio-player]");
  const audio = elements.previewArea.querySelector("[data-audio-element]");
  if (!player || !audio || !state.audioPlaylist.length) {
    return;
  }

  const title = player.querySelector(".audio-player__title");
  const cover = player.querySelector(".audio-cover");
  const modeButton = player.querySelector("[data-audio-mode]");
  const trackButtons = [...player.querySelectorAll("[data-audio-track]")];

  const updateCover = async (resource) => {
    cover.classList.remove("has-cover");
    cover.innerHTML = '<span data-icon="music"></span>';
    hydrateIcons(cover);
    const coverUrl = await getAudioCover(resource);
    if (!coverUrl || !player.isConnected || state.audioPlaylist[state.audioIndex]?.id !== resource.id) {
      return;
    }
    cover.innerHTML = `<img src="${escapeHTML(coverUrl)}" alt="" loading="lazy" decoding="async">`;
    cover.classList.add("has-cover");
  };

  const updateTrackUI = () => {
    const current = state.audioPlaylist[state.audioIndex];
    if (!current) {
      return;
    }
    title.textContent = current.name;
    trackButtons.forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.audioTrack) === state.audioIndex);
    });
    updateCover(current);
  };

  const getNextIndex = (step) => {
    const length = state.audioPlaylist.length;
    if (length < 2) {
      return state.audioIndex;
    }
    if (state.audioMode === "shuffle" && step > 0) {
      let next = state.audioIndex;
      while (next === state.audioIndex) {
        next = Math.floor(Math.random() * length);
      }
      return next;
    }
    return (state.audioIndex + step + length) % length;
  };

  const playIndex = async (index) => {
    const nextIndex = Math.max(0, Math.min(index, state.audioPlaylist.length - 1));
    const nextResource = state.audioPlaylist[nextIndex];
    const nextUrl = getObjectUrl(nextResource);
    if (!nextUrl) {
      return;
    }
    state.audioIndex = nextIndex;
    audio.src = nextUrl;
    audio.load();
    updateTrackUI();
    try {
      await audio.play();
    } catch (error) {
      // Browser autoplay policies may require another click.
    }
  };

  const updateModeButton = () => {
    const shuffle = state.audioMode === "shuffle";
    modeButton.querySelector("span:last-child").textContent = shuffle ? "随机播放" : "顺序播放";
    modeButton.setAttribute("aria-label", shuffle ? "随机播放" : "顺序播放");
    modeButton.setAttribute("title", shuffle ? "随机播放" : "顺序播放");
    const icon = modeButton.querySelector("[data-icon]");
    icon.dataset.icon = shuffle ? "shuffle" : "repeat";
    icon.dataset.iconReady = "false";
    hydrateIcons(modeButton);
  };

  const hydratePlaylistCovers = () => {
    player.querySelectorAll("[data-audio-playlist-cover]").forEach(async (coverNode) => {
      const resource = state.audioPlaylist.find((entry) => entry.id === coverNode.dataset.audioPlaylistCover);
      const coverUrl = resource ? await getAudioCover(resource) : "";
      if (!coverUrl || !coverNode.isConnected) {
        return;
      }
      coverNode.removeAttribute("data-icon");
      delete coverNode.dataset.iconReady;
      coverNode.classList.add("has-cover");
      coverNode.innerHTML = `<img src="${escapeHTML(coverUrl)}" alt="" loading="lazy" decoding="async">`;
    });
  };

  audio.addEventListener("play", () => player.classList.add("is-playing"));
  audio.addEventListener("playing", () => player.classList.add("is-playing"));
  audio.addEventListener("pause", () => player.classList.remove("is-playing"));
  audio.addEventListener("ended", () => playIndex(getNextIndex(1)));
  player.querySelector("[data-audio-prev]").addEventListener("click", () => {
    playIndex(getNextIndex(-1));
  });
  player.querySelector("[data-audio-next]").addEventListener("click", () => {
    playIndex(getNextIndex(1));
  });
  modeButton.addEventListener("click", () => {
    state.audioMode = state.audioMode === "shuffle" ? "sequence" : "shuffle";
    updateModeButton();
  });
  player.querySelector("[data-audio-close]").addEventListener("click", () => {
    audio.pause();
    player.remove();
    elements.audioRestoreButton.hidden = true;
    state.audioPlaylist = [];
    state.audioIndex = -1;
  });
  player.querySelector("[data-audio-hide]").addEventListener("click", () => {
    player.classList.add("is-hidden");
    elements.audioRestoreButton.hidden = false;
  });
  trackButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playIndex(Number(button.dataset.audioTrack) || 0);
    });
  });
  updateTrackUI();
  hydratePlaylistCovers();
}

function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function isFullscreenAvailable(element) {
  return Boolean(
    element
    && (
      typeof element.requestFullscreen === "function"
      || typeof element.webkitRequestFullscreen === "function"
    )
  );
}

function requestElementFullscreen(element) {
  if (!element) {
    return Promise.resolve();
  }
  if (typeof element.requestFullscreen === "function") {
    return element.requestFullscreen();
  }
  if (typeof element.webkitRequestFullscreen === "function") {
    return Promise.resolve(element.webkitRequestFullscreen());
  }
  return Promise.resolve();
}

function exitElementFullscreen() {
  if (typeof document.exitFullscreen === "function") {
    return document.exitFullscreen();
  }
  if (typeof document.webkitExitFullscreen === "function") {
    return Promise.resolve(document.webkitExitFullscreen());
  }
  return Promise.resolve();
}

function supportsPreviewFullscreen() {
  return isFullscreenAvailable(elements.previewPanel);
}

function isPreviewReadingSupported(resource) {
  return isDocumentReadingResource(resource);
}

function syncPreviewFullscreenButton() {
  if (!elements.previewFullscreenButton) {
    return;
  }
  const active = getFullscreenElement() === elements.previewPanel
    || elements.previewModal.classList.contains("is-expanded");
  elements.previewFullscreenButton.setAttribute("aria-pressed", String(active));
  elements.previewFullscreenButton.setAttribute("aria-label", active ? "退出全屏" : "全屏显示");
  elements.previewFullscreenButton.title = active ? "退出全屏" : "全屏显示";
  const iconNode = elements.previewFullscreenButton.querySelector("[data-icon]");
  if (iconNode) {
    const name = active ? "minimize" : "maximize";
    iconNode.dataset.icon = name;
    iconNode.innerHTML = icon(name);
  }
}

function syncPreviewReadingButton() {
  const active = Boolean(state.previewReading);
  elements.previewModal.classList.toggle("is-reading", active);
  if (!elements.previewReadButton) {
    return;
  }
  elements.previewReadButton.setAttribute("aria-pressed", String(active));
  elements.previewReadButton.setAttribute("aria-label", active ? "退出阅读模式" : "阅读模式");
  elements.previewReadButton.title = active ? "退出阅读模式" : "阅读模式";
}

function togglePreviewReading() {
  const resource = state.previewResource || findResource(state.previewId);
  if (resource && isDocumentReadingResource(resource)) {
    const id = resource.id;
    const prepared = state.previewResource;
    state.previewHandoff = true;
    closePreview();
    openReader(id, {
      text: isTextReaderResource(resource) ? state.textDocumentCache.get(id) : undefined,
      resource: prepared
    });
    return;
  }
  state.previewReading = !state.previewReading;
  syncPreviewReadingButton();
}

async function togglePreviewFullscreen() {
  const panel = elements.previewPanel;
  if (!panel) {
    return;
  }
  if (getFullscreenElement() === panel) {
    await exitElementFullscreen();
    return;
  }
  if (!supportsPreviewFullscreen()) {
    elements.previewModal.classList.toggle("is-expanded");
    syncPreviewFullscreenButton();
    return;
  }
  try {
    await requestElementFullscreen(panel);
  } catch (error) {
    elements.previewModal.classList.toggle("is-expanded");
  }
  syncPreviewFullscreenButton();
}

async function preparePreviewResource(resource, title = "正在准备文档预览") {
  if (!resource.compressed || resource.chunked) {
    return resource;
  }
  const progressToast = showProgressToast(title, resource.name);
  try {
    const sourceUrl = resource.url || getObjectUrl(resource);
    if (!sourceUrl) {
      throw new Error("文件地址不可用");
    }
    const compressedBlob = await fetchBlobWithProgress(sourceUrl, (loaded, total) => {
      progressToast.update(
        total ? (loaded / total) * 90 : 0,
        total ? `${formatBytes(loaded)} / ${formatBytes(total)}` : `已读取 ${formatBytes(loaded)}`
      );
    });
    progressToast.update(94, "正在恢复原文件");
    const originalBlob = await decompressBlob(compressedBlob);
    const previewBlob = new Blob(
      [originalBlob],
      { type: resource.originalMime || resource.mime || "application/octet-stream" }
    );
    if (state.previewObjectUrl) {
      URL.revokeObjectURL(state.previewObjectUrl);
    }
    state.previewObjectUrl = URL.createObjectURL(previewBlob);
    progressToast.complete("预览已准备", resource.name);
    return {
      ...resource,
      url: state.previewObjectUrl,
      blob: null,
      compressed: false
    };
  } catch (error) {
    progressToast.fail("预览准备失败", error.message || "请下载后查看");
    return null;
  }
}

async function openPreview(id) {
  let resource = findResource(id);
  if (!resource) {
    return;
  }

  state.previewId = id;
  resource = await preparePreviewResource(resource);
  if (!resource) {
    state.previewId = "";
    state.previewResource = null;
    return;
  }
  state.previewResource = resource;
  elements.previewTitle.textContent = resource.originalName || resource.name;
  const url = getObjectUrl(resource);
  let preview = "";
  let loadTextDocument = false;

  if (resource.kind === "audio" && !state.audioLibraryLoaded) {
    const progressToast = showProgressToast("正在加载音乐列表", resource.name);
    try {
      await loadAudioLibrary(resource);
      progressToast.complete("音乐列表已加载", `${state.audioLibrary.length} 首`);
    } catch (error) {
      state.audioLibrary = state.resources.filter((entry) => entry.kind === "audio");
      state.audioLibraryLoaded = true;
      progressToast.fail("音乐列表读取失败", "已改用当前列表");
    }
  }
  if (resource.kind === "audio") {
    document.querySelectorAll(".audio-player.is-docked").forEach((player) => player.remove());
    elements.audioRestoreButton.hidden = true;
  }

  if (resource.kind === "folder") {
    preview = `
      <div class="preview-placeholder">
        <span data-icon="folder-tree"></span>
        <strong>${escapeHTML(resource.name)}</strong>
        <span>文件夹已保留目录结构，下载后解压即可恢复原文件夹。</span>
      </div>
    `;
  } else if (resource.compressed && !resource.chunked) {
    preview = `
      <div class="preview-placeholder">
        <span data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>
        <strong>${escapeHTML(resource.name)}</strong>
        <span>文件已压缩保存，下载时会自动恢复原文件。</span>
      </div>
    `;
  } else if (resource.chunked) {
    preview = `
      <div class="preview-placeholder">
        <span data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>
        <strong>分片资源</strong>
        <span>文件分片保存，下载时会自动合并并恢复。</span>
      </div>
    `;
  } else if (resource.kind === "image" && url) {
    preview = `<img src="${escapeHTML(url)}" alt="${escapeHTML(resource.name)}">`;
  } else if (resource.kind === "video" && url) {
    preview = `<video src="${escapeHTML(url)}" controls autoplay playsinline preload="metadata"></video>`;
  } else if (resource.kind === "audio" && url) {
    preview = renderAudioPlayer(resource);
  } else if (isPdf(resource) && url) {
    preview = `<iframe src="${escapeHTML(url)}" title="${escapeHTML(resource.name)}"></iframe>`;
  } else if (["document", "code"].includes(resource.kind) && url) {
    const documentType = getDocumentPreviewType(resource);
    if (
      documentType === "office"
      && resource.url
      && !resource.blob
      && !resource.url.startsWith("blob:")
    ) {
      const absoluteUrl = new URL(resource.url, window.location.href).href;
      const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
      preview = `<iframe src="${escapeHTML(viewerUrl)}" title="${escapeHTML(resource.name)}"></iframe>`;
    } else if (documentType === "text") {
      preview = `<pre class="document-preview" data-document-preview>正在加载文档内容…</pre>`;
      loadTextDocument = true;
    } else {
      preview = `
        <div class="preview-placeholder">
          <span data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>
          <strong>${escapeHTML(resource.name)}</strong>
          <span>该文档暂不支持在线预览，可下载后打开。</span>
        </div>
      `;
    }
  } else {
    const summary = resource.description
      || (resource.kind === "archive"
        ? "压缩包无法直接在网页中打开，可查看文件简介或下载后使用。"
        : "此格式暂不支持页面内预览，可查看文件简介或下载后打开。");
    preview = `
      <div class="preview-placeholder">
        <span data-icon="${escapeHTML(typeIcon(resource.kind))}"></span>
        <strong>${escapeHTML(resource.name)}</strong>
        <span>${escapeHTML(summary)}</span>
      </div>
    `;
  }

  elements.previewArea.innerHTML = preview;
  if (loadTextDocument) {
    loadTextDocumentPreview(resource);
  }
  if (resource.kind === "audio") {
    setupAudioPlayer();
  }
  const tags = resource.tags.length ? resource.tags.join("、") : "无标签";
  const originalSize = resource.originalSize || resource.size;
  const storedSizeItem = resource.compressed && resource.size && resource.size !== originalSize
    ? `<div class="preview-meta__item"><span>云端占用</span><strong>${escapeHTML(formatBytes(resource.size))}</strong></div>`
    : "";
  elements.previewMeta.innerHTML = `
    <div class="preview-meta__item"><span>文件大小</span><strong>${escapeHTML(formatBytes(originalSize))}</strong></div>
    ${storedSizeItem}
    <div class="preview-meta__item"><span>存储方式</span><strong>${resource.storage === "browser" ? "临时文件" : resource.chunked ? "分片文件" : "已上传"}</strong></div>
    <div class="preview-meta__item"><span>标签</span><strong title="${escapeHTML(tags)}">${escapeHTML(tags)}</strong></div>
    <div class="preview-meta__item"><span>上传时间</span><strong>${escapeHTML(formatDate(resource.uploadedAt))}</strong></div>
    <div class="preview-meta__item"><span>文件类型</span><strong>${escapeHTML(typeLabel(resource.kind))}</strong></div>
    <div class="preview-meta__item"><span>简介</span><strong title="${escapeHTML(resource.description || "无")}">${escapeHTML(resource.description || "无")}</strong></div>
  `;
  hydrateIcons(elements.previewArea);
  elements.previewReadButton.hidden = !isPreviewReadingSupported(resource);
  elements.previewModal.classList.toggle("is-code-preview", resource.kind === "code");
  elements.previewModal.classList.remove("is-expanded");
  syncPreviewReadingButton();
  syncPreviewFullscreenButton();
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
  const audioPlayer = elements.previewArea.querySelector("[data-audio-player]");
  if (audioPlayer) {
    document.querySelectorAll(".audio-player.is-docked").forEach((player) => player.remove());
    document.body.appendChild(audioPlayer);
    audioPlayer.classList.add("is-docked");
    audioPlayer.classList.remove("is-hidden");
    elements.audioRestoreButton.hidden = true;
  }
  const video = elements.previewArea.querySelector("video");
  if (video) {
    video.pause();
  }
  if (getFullscreenElement() === elements.previewPanel) {
    exitElementFullscreen().catch(() => {
      // Ignore if the browser has already left fullscreen.
    });
  }
  elements.previewArea.innerHTML = "";
  elements.previewModal.classList.remove("is-open");
  elements.previewModal.classList.remove("is-expanded", "is-reading", "is-code-preview");
  elements.previewModal.setAttribute("aria-hidden", "true");
  state.previewId = "";
  state.previewResource = null;
  if (state.previewObjectUrl && !state.previewHandoff) {
    URL.revokeObjectURL(state.previewObjectUrl);
    state.previewObjectUrl = "";
  }
  state.previewHandoff = false;
  syncModalOpenState();
}

function isTextReaderResource(resource) {
  return isDocumentReadingResource(resource)
    && getDocumentPreviewType(resource) === "text";
}

function isDocumentReadingResource(resource) {
  if (!resource || resource.kind !== "document") {
    return false;
  }
  if (resource.compressed && resource.chunked) {
    return false;
  }
  const documentType = getDocumentPreviewType(resource);
  return documentType === "text" || documentType === "pdf" || documentType === "office";
}

function syncReaderFullscreenButton() {
  const active = getFullscreenElement() === elements.readerPanel
    || elements.readerView.classList.contains("is-expanded");
  elements.readerFullscreenButton.setAttribute("aria-pressed", String(active));
  elements.readerFullscreenButton.setAttribute("aria-label", active ? "退出全屏" : "全屏显示");
  elements.readerFullscreenButton.title = active ? "退出全屏" : "全屏显示";
  const iconNode = elements.readerFullscreenButton.querySelector("[data-icon]");
  if (iconNode) {
    const name = active ? "minimize" : "maximize";
    iconNode.dataset.icon = name;
    iconNode.innerHTML = icon(name);
  }
}

function syncReaderControls() {
  const reading = Boolean(state.readerReading);
  elements.readerView.classList.toggle("is-reading", reading);
  elements.readerView.style.setProperty("--reader-scale", String(state.readerFontScale));
  elements.readerScale.textContent = `${Math.round(state.readerFontScale * 100)}%`;
  elements.readerReadingButton.setAttribute("aria-pressed", String(reading));
  elements.readerReadingButton.setAttribute("aria-label", reading ? "退出阅读模式" : "阅读模式");
  elements.readerReadingButton.title = reading ? "退出阅读模式" : "阅读模式";
  elements.readerFontDownButton.disabled = state.readerFontScale <= 0.8;
  elements.readerFontUpButton.disabled = state.readerFontScale >= 1.8;
  syncReaderFullscreenButton();
}

function toggleReaderReading() {
  state.readerReading = !state.readerReading;
  syncReaderControls();
}

function adjustReaderFont(delta) {
  const next = Math.min(1.8, Math.max(0.8, Math.round((state.readerFontScale + delta) * 100) / 100));
  state.readerFontScale = next;
  syncReaderControls();
}

function buildReaderPages(text) {
  const pages = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + READER_PAGE_SIZE, text.length);
    if (end < text.length) {
      const code = text.charCodeAt(end - 1);
      if (code >= 0xd800 && code <= 0xdbff) {
        end -= 1;
      }
    }
    pages.push(text.slice(start, end));
    start = end;
  }
  return pages.length ? pages : [""];
}

function renderReaderPage(index) {
  const pages = state.readerPages.length ? state.readerPages : [""];
  const pageIndex = Math.min(Math.max(index, 0), pages.length - 1);
  state.readerPageIndex = pageIndex;
  elements.readerText.textContent = pages[pageIndex];
  elements.readerPager.hidden = pages.length <= 1;
  elements.readerPageIndicator.textContent = `${pageIndex + 1} / ${pages.length}`;
  elements.readerPrevButton.disabled = pageIndex <= 0;
  elements.readerNextButton.disabled = pageIndex >= pages.length - 1;
  elements.readerBody.scrollTop = 0;
  elements.readerBody.scrollLeft = 0;
}

function setReaderDocument(text) {
  state.readerPages = buildReaderPages(text);
  renderReaderPage(0);
}

function goReaderPage(delta) {
  renderReaderPage(state.readerPageIndex + delta);
}

async function toggleReaderFullscreen() {
  const panel = elements.readerPanel;
  if (!panel) {
    return;
  }
  if (getFullscreenElement() === panel) {
    await exitElementFullscreen();
    return;
  }
  if (elements.readerView.classList.contains("is-expanded")) {
    elements.readerView.classList.remove("is-expanded");
    syncReaderFullscreenButton();
    return;
  }
  if (!isFullscreenAvailable(panel)) {
    elements.readerView.classList.add("is-expanded");
    syncReaderFullscreenButton();
    return;
  }
  try {
    await requestElementFullscreen(panel);
  } catch (error) {
    elements.readerView.classList.add("is-expanded");
  }
  syncReaderFullscreenButton();
}

function renderReaderEmbed(resource) {
  const documentType = getDocumentPreviewType(resource);
  const url = getObjectUrl(resource);
  let embedUrl = "";
  if (documentType === "pdf" && url) {
    embedUrl = url;
  } else if (
    documentType === "office"
    && resource.url
    && !resource.blob
    && !resource.url.startsWith("blob:")
  ) {
    const absoluteUrl = new URL(resource.url, window.location.href).href;
    embedUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
  }
  if (embedUrl) {
    elements.readerFrame.hidden = false;
    elements.readerEmbedEmpty.hidden = true;
    elements.readerFrame.src = embedUrl;
    return;
  }
  elements.readerFrame.hidden = true;
  elements.readerFrame.removeAttribute("src");
  elements.readerEmbedEmpty.hidden = false;
}

async function openReader(id, options = {}) {
  const resource = findResource(id);
  if (!resource) {
    return;
  }
  state.readerId = id;
  elements.readerTitle.textContent = resource.originalName || resource.name;
  elements.readerView.classList.toggle("is-code", resource.kind === "code");
  elements.readerView.classList.remove("is-expanded");
  state.readerPages = [];
  state.readerPageIndex = 0;
  elements.readerPager.hidden = true;
  elements.readerView.classList.add("is-open");
  elements.readerView.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const documentType = getDocumentPreviewType(resource);
  const embedMode = documentType === "pdf" || documentType === "office";
  elements.readerView.classList.toggle("is-embed", embedMode);
  elements.readerBody.hidden = embedMode;
  elements.readerEmbed.hidden = !embedMode;

  if (embedMode) {
    const prepared = options.resource
      || await preparePreviewResource(resource, "正在准备文档阅读")
      || resource;
    if (state.readerId !== id) {
      return;
    }
    state.readerResource = prepared;
    renderReaderEmbed(prepared);
    syncReaderControls();
    return;
  }

  elements.readerText.textContent = "正在加载文档内容…";
  syncReaderControls();

  if (typeof options.text === "string") {
    state.readerResource = options.resource || resource;
    setReaderDocument(options.text);
    return;
  }

  const prepared = await preparePreviewResource(resource, "正在准备文档阅读");
  if (state.readerId !== id) {
    return;
  }
  if (!prepared) {
    elements.readerText.textContent = "文档准备失败，请下载后查看。";
    return;
  }
  state.readerResource = prepared;
  elements.readerBody.scrollTop = 0;
  try {
    const text = await readTextDocument(prepared);
    if (state.readerId !== id) {
      return;
    }
    setReaderDocument(text);
  } catch (error) {
    if (state.readerId === id) {
      elements.readerText.textContent = error.message || "文档读取失败";
    }
  }
}

function closeReader() {
  if (getFullscreenElement() === elements.readerPanel) {
    exitElementFullscreen().catch(() => {
      // Ignore if the browser has already left fullscreen.
    });
  }
  elements.readerView.classList.remove("is-open", "is-reading", "is-code", "is-expanded", "is-embed");
  elements.readerView.setAttribute("aria-hidden", "true");
  elements.readerText.textContent = "";
  elements.readerBody.hidden = false;
  elements.readerEmbed.hidden = true;
  elements.readerFrame.hidden = true;
  elements.readerFrame.removeAttribute("src");
  elements.readerEmbedEmpty.hidden = true;
  state.readerPages = [];
  state.readerPageIndex = 0;
  elements.readerPager.hidden = true;
  state.readerId = "";
  state.readerResource = null;
  if (state.previewObjectUrl) {
    URL.revokeObjectURL(state.previewObjectUrl);
    state.previewObjectUrl = "";
  }
  syncModalOpenState();
}

function openResourceDefault(id) {
  openPreview(id);
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
    showToast("无法复制链接", "请使用下载按钮保存文件", "error");
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
  elements.editForm.elements.tags.value = resource.tags.join(", ");
  elements.editForm.elements.description.value = resource.description || "";
  elements.editModal.classList.add("is-open");
  elements.editModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => elements.editForm.elements.name.focus(), 0);
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
    } else if (state.mode === "supabase" && resource.storage !== "browser") {
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
  const hasOpenModal = Boolean(document.querySelector(".modal.is-open, .reader.is-open"));
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
    if (state.mode === "supabase" && !state.cloudOffline) {
      await loadSupabasePage();
    } else {
      renderAll();
    }
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
    throw new Error("当前环境不支持文件恢复");
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

function findZipEndRecord(view) {
  const minimumOffset = Math.max(0, view.byteLength - 65557);
  for (let offset = view.byteLength - 22; offset >= minimumOffset; offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) {
      return offset;
    }
  }
  return -1;
}

async function extractStoredZip(blob) {
  const buffer = await blob.arrayBuffer();
  const view = new DataView(buffer);
  const endOffset = findZipEndRecord(view);
  if (endOffset < 0) {
    throw new Error("压缩包结构无效");
  }

  const entryCount = view.getUint16(endOffset + 10, true);
  const centralOffset = view.getUint32(endOffset + 16, true);
  const decoder = new TextDecoder();
  const entries = [];
  let offset = centralOffset;

  for (let index = 0; index < entryCount; index += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) {
      throw new Error("压缩包目录损坏");
    }
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const name = decoder.decode(new Uint8Array(buffer, offset + 46, nameLength));

    if (method !== 0) {
      throw new Error("仅支持恢复由本站打包的文件夹");
    }
    if (!name.endsWith("/")) {
      if (view.getUint32(localOffset, true) !== 0x04034b50) {
        throw new Error("压缩包文件头损坏");
      }
      const localNameLength = view.getUint16(localOffset + 26, true);
      const localExtraLength = view.getUint16(localOffset + 28, true);
      const dataStart = localOffset + 30 + localNameLength + localExtraLength;
      entries.push({
        name,
        blob: blob.slice(dataStart, dataStart + compressedSize)
      });
    }
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

async function writeZipEntriesToDirectory(entries, directoryHandle, onProgress) {
  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    const segments = entry.name.split("/").filter(Boolean);
    const fileName = segments.pop();
    if (!fileName) {
      continue;
    }
    let currentDirectory = directoryHandle;
    for (const segment of segments) {
      currentDirectory = await currentDirectory.getDirectoryHandle(segment, { create: true });
    }
    const fileHandle = await currentDirectory.getFileHandle(fileName, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(entry.blob);
    await writable.close();
    onProgress?.((index + 1) / entries.length, `正在写入 ${index + 1} / ${entries.length}`);
  }
}

async function downloadFolderResource(resource, url, directoryHandle = null) {
  const progressToast = showProgressToast("正在下载文件夹", resource.name);
  let archiveBlob = null;
  try {
    archiveBlob = await fetchBlobWithProgress(url, (loaded, total) => {
      progressToast.update(
        total ? Math.min(75, (loaded / total) * 75) : 0,
        total ? `${formatBytes(loaded)} / ${formatBytes(total)}` : `已下载 ${formatBytes(loaded)}`
      );
    });
    progressToast.update(78, "正在解析文件夹");
    const entries = await extractStoredZip(archiveBlob);
    if (!entries.length) {
      throw new Error("文件夹内容为空");
    }
    if (directoryHandle) {
      await writeZipEntriesToDirectory(entries, directoryHandle, (progress, detail) => {
        progressToast.update(78 + progress * 22, detail);
      });
      progressToast.complete("文件夹已恢复", resource.name);
    } else {
      saveBlob(archiveBlob, resource.name || "folder.zip");
      progressToast.complete("文件夹已下载", "浏览器不支持自动写入目录，已保存压缩包");
    }
  } catch (error) {
    if (archiveBlob) {
      saveBlob(archiveBlob, resource.name || "folder.zip");
      progressToast.complete("文件夹已下载", "自动恢复失败，已保存压缩包");
      return;
    }
    progressToast.fail("文件夹下载失败", error.message || "请稍后重试");
  }
}

async function downloadResource(id) {
  const resource = findResource(id);
  if (!resource) {
    return;
  }

  if (resource.kind === "folder") {
    const folderUrl = resource.url || getObjectUrl(resource);
    if (!folderUrl) {
      showToast("无法下载", "文件夹地址不可用", "error");
      return;
    }
    let directoryHandle = null;
    if (typeof window.showDirectoryPicker === "function") {
      try {
        directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }
    await downloadFolderResource(resource, folderUrl, directoryHandle);
    return;
  }

  if (state.mode === "supabase" && resource.url) {
    const progressToast = showProgressToast(
      resource.chunked ? "正在下载分片" : "正在下载",
      resource.name
    );
    try {
      let downloadedBlob;
      if (resource.chunked) {
        const partBlobs = [];
        for (let index = 0; index < resource.chunkParts.length; index += 1) {
          const partPath = resource.chunkParts[index];
          const partBlob = await fetchBlobWithProgress(
            supabasePublicFileUrl(partPath),
            (loaded, total) => {
              const partProgress = total ? loaded / total : 0;
              const overall = ((index + partProgress) / resource.chunkParts.length) * 100;
              progressToast.update(
                overall,
                `分片 ${index + 1} / ${resource.chunkParts.length}${total ? ` · ${formatBytes(loaded)} / ${formatBytes(total)}` : ""}`
              );
            }
          );
          partBlobs.push(partBlob);
          progressToast.update(
            ((index + 1) / resource.chunkParts.length) * 100,
            `已下载 ${index + 1} / ${resource.chunkParts.length} 个分片`
          );
        }
        downloadedBlob = new Blob(partBlobs, {
          type: resource.compressed ? "application/gzip" : resource.originalMime
        });
      } else {
        downloadedBlob = await fetchBlobWithProgress(resource.url, (loaded, total) => {
          progressToast.update(
            total ? (loaded / total) * 100 : 0,
            total ? `${formatBytes(loaded)} / ${formatBytes(total)}` : `已下载 ${formatBytes(loaded)}`
          );
        });
      }
      let originalBlob = downloadedBlob;
      if (resource.compressed) {
        progressToast.update(100, "正在恢复原文件");
        originalBlob = await decompressBlob(downloadedBlob);
      }
      saveBlob(originalBlob, resource.originalName || resource.name);
      progressToast.complete(
        resource.compressed ? "原文件已恢复" : "下载完成",
        resource.originalName || resource.name
      );
    } catch (error) {
      progressToast.fail("下载失败", error.message || "无法恢复原文件");
    }
    return;
  }

  const url = getObjectUrl(resource);
  if (!url) {
    showToast("无法下载", "资源地址不可用", "error");
    return;
  }

  const progressToast = showProgressToast("正在下载", resource.name);
  try {
    const blob = await fetchBlobWithProgress(url, (loaded, total) => {
      progressToast.update(
        total ? (loaded / total) * 100 : 0,
        total ? `${formatBytes(loaded)} / ${formatBytes(total)}` : `已下载 ${formatBytes(loaded)}`
      );
    });
    saveBlob(blob, resource.name || "resource");
    progressToast.complete("下载完成", resource.name);
  } catch (error) {
    progressToast.fail("下载失败", error.message || "请稍后重试");
  }
}

function setFilter(filter) {
  state.filter = filter;
  state.page = 1;
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const active = tab.dataset.filter === filter;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  if (state.mode === "supabase" && !state.cloudOffline) {
    loadSupabasePage();
  } else {
    renderResources();
  }
}

function bindEvents() {
  elements.audioRestoreButton.addEventListener("click", () => {
    const player = document.querySelector(".audio-player.is-docked");
    if (!player) {
      elements.audioRestoreButton.hidden = true;
      return;
    }
    player.classList.remove("is-hidden");
    elements.audioRestoreButton.hidden = true;
  });
  elements.adminButton.addEventListener("click", () => {
    if (state.isAdmin) {
      setAdminMode(false);
    } else {
      openAdminModal();
    }
  });
  elements.adminForm.addEventListener("submit", submitAdmin);
  elements.folderInput.setAttribute("webkitdirectory", "");
  elements.folderInput.setAttribute("directory", "");
  elements.folderInput.webkitdirectory = true;
  elements.folderInput.multiple = true;
  elements.chooseFilesButton.addEventListener("click", (event) => {
    event.stopPropagation();
    elements.fileInput.click();
  });
  elements.chooseFolderButton.addEventListener("click", (event) => {
    event.stopPropagation();
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
  elements.dropZone.addEventListener("drop", async (event) => {
    event.preventDefault();
    elements.dropZone.classList.remove("is-dragging");
    try {
      showToast("正在读取拖入内容", "文件夹会递归读取所有子目录");
      const files = await filesFromDataTransfer(event.dataTransfer);
      addFiles(files);
    } catch (error) {
      showToast("读取文件夹失败", error.message || "请改用“选择文件夹”按钮", "error");
    }
  });
  elements.fileInput.addEventListener("change", () => {
    addFiles(elements.fileInput.files);
    elements.fileInput.value = "";
  });
  elements.folderInput.addEventListener("change", () => {
    addFiles(elements.folderInput.files);
    elements.folderInput.value = "";
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
    state.page = 1;
    window.clearTimeout(state.searchTimer);
    if (state.mode === "supabase" && !state.cloudOffline) {
      state.searchTimer = window.setTimeout(loadSupabasePage, 350);
    } else {
      renderResources();
    }
  });
  elements.sortSelect.addEventListener("change", () => {
    state.sort = elements.sortSelect.value;
    state.page = 1;
    if (state.mode === "supabase" && !state.cloudOffline) {
      loadSupabasePage();
    } else {
      renderResources();
    }
  });
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => setFilter(tab.dataset.filter));
  });
  elements.previousPageButton.addEventListener("click", () => {
    goToPage(state.page - 1);
  });
  elements.nextPageButton.addEventListener("click", () => {
    goToPage(state.page + 1);
  });
  elements.pageNumbers.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (pageButton) {
      goToPage(Number(pageButton.dataset.page) || 1);
    }
  });
  elements.pageJumpButton.addEventListener("click", () => {
    goToPage(elements.pageJumpInput.value);
  });
  elements.pageJumpInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      goToPage(elements.pageJumpInput.value);
    }
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
        openResourceDefault(playableRow.dataset.resourceId);
      }
      return;
    }
    const id = action.dataset.id;
    if (action.dataset.action === "preview") {
      openResourceDefault(id);
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
      openResourceDefault(playableRow.dataset.resourceId);
    }
  });

  elements.previewDownloadButton.addEventListener("click", () => {
    if (state.previewId) {
      downloadResource(state.previewId);
    }
  });
  elements.previewReadButton.addEventListener("click", togglePreviewReading);
  elements.readerBackButton.addEventListener("click", closeReader);
  elements.readerPrevButton.addEventListener("click", () => goReaderPage(-1));
  elements.readerNextButton.addEventListener("click", () => goReaderPage(1));
  elements.readerReadingButton.addEventListener("click", toggleReaderReading);
  elements.readerFontDownButton.addEventListener("click", () => adjustReaderFont(-0.1));
  elements.readerFontUpButton.addEventListener("click", () => adjustReaderFont(0.1));
  elements.readerFullscreenButton.addEventListener("click", () => {
    toggleReaderFullscreen();
  });
  elements.readerDownloadButton.addEventListener("click", () => {
    if (state.readerId) {
      downloadResource(state.readerId);
    }
  });
  const syncFullscreenState = () => {
    syncPreviewFullscreenButton();
    syncReaderFullscreenButton();
  };
  document.addEventListener("fullscreenchange", syncFullscreenState);
  document.addEventListener("webkitfullscreenchange", syncFullscreenState);
  elements.readerPanel.addEventListener("dblclick", (event) => {
    if (event.target.closest("button, a, input, textarea, select, .reader__tools")) {
      return;
    }
    toggleReaderFullscreen();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    if (!elements.readerView.classList.contains("is-open") || state.readerPages.length <= 1) {
      return;
    }
    const target = event.target;
    if (target && typeof target.closest === "function"
      && target.closest("input, textarea, select, [contenteditable='true']")) {
      return;
    }
    event.preventDefault();
    goReaderPage(event.key === "ArrowRight" ? 1 : -1);
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
  document.querySelectorAll("[data-close-reader]").forEach((trigger) => {
    trigger.addEventListener("click", closeReader);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }
    if (getFullscreenElement()) {
      return;
    }
    if (elements.confirmModal.classList.contains("is-open")) {
      closeDeleteConfirm();
    } else if (elements.adminModal.classList.contains("is-open")) {
      closeAdminModal();
    } else if (elements.editModal.classList.contains("is-open")) {
      closeEdit();
    } else if (elements.readerView.classList.contains("is-open")) {
      closeReader();
    } else if (elements.previewModal.classList.contains("is-open")) {
      closePreview();
    }
  });
}

async function init() {
  hydrateIcons();
  elements.adminButtonText.textContent = state.isAdmin ? "退出管理" : "管理员";
  elements.adminButton.setAttribute("aria-label", state.isAdmin ? "退出管理模式" : "管理员模式");
  elements.adminButton.classList.toggle("is-active", state.isAdmin);
  bindEvents();
  await detectStorageMode();
  try {
    await openDatabase();
  } catch (error) {
    state.mode = "error";
    showToast("存储不可用", error.message || "无法初始化存储", "error");
    return;
  }
  await loadResources();
  startSupabaseKeepAlive();
  syncPendingCloudUploads();
}

init();
