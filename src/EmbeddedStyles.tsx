import React from "react";

export const EmbeddedStyles: React.FC = () => (
    <style>{`
    :root {
      --primary-color: #0ea5e9; /* sky-500 */
      --secondary-color: #64748b; /* slate-500 */
      --danger-color: #ef4444; /* red-500 */
      --success-color: #22c55e; /* green-500 */
      --bg-color: #f8fafc; /* slate-50 */
      --text-color: #0f172a; /* slate-900 */
      --border-color: #e2e8f0; /* slate-200 */
      --card-bg: #ffffff;
      --font-family: 'Inter', sans-serif;
      --border-radius: 8px;
      --box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    
    /* Reset & Base */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: var(--font-family);
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }
    
    a {
      color: var(--primary-color);
      text-decoration: none;
    }
    
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    /* Layout */
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .main-content {
      flex-grow: 1;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    
    .page-container {
      max-width: 900px;
      margin: 0 auto;
      background: var(--card-bg);
      padding: 2rem;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }
    
    /* Navbar */
    .navbar {
      background-color: var(--card-bg);
      box-shadow: var(--box-shadow);
      padding: 0 1.5rem;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      height: 64px;
    }
    
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color);
    }
    
    .navbar-links {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    
    .nav-link {
      font-weight: 500;
      color: var(--secondary-color);
      transition: color 0.2s ease;
      padding: 0.5rem 0;
    }
    
    .nav-link:hover {
      color: var(--primary-color);
    }
    
    .nav-link.active {
      color: var(--primary-color);
      font-weight: 600;
      border-bottom: 2px solid var(--primary-color);
    }
    
    .nav-link.btn { /* Nút "Viết bài" */
      border: none;
      padding: 0.5rem 1rem;
    }
    
    /* Buttons */
    .btn {
      display: inline-block;
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
      font-weight: 600;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: center;
    }
    
    .btn-primary {
      background-color: var(--primary-color);
      color: white;
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    
    .btn-secondary {
      background-color: var(--border-color);
      color: var(--text-color);
    }
    .btn-secondary:hover {
      background-color: #d1d5db; /* cool-gray-300 */
    }
    
    .btn-danger {
      background-color: var(--danger-color);
      color: white;
    }
    .btn-danger:hover {
      opacity: 0.9;
    }
    
    .btn-sm {
      padding: 0.3rem 0.6rem;
      font-size: 0.8rem;
    }

    /* Post List Page */
    .post-list-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .post-list-header h2 {
      font-size: 1.25rem;
      color: var(--secondary-color);
    }
    
    .filter-input {
      padding: 0.6rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      font-size: 0.9rem;
      min-width: 250px;
    }
    
    .post-list-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    
    /* Post Card */
    .post-card {
      background: var(--card-bg);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .post-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    
    .post-card-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .post-card-content {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .post-card-category {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    
    .post-card-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    
    .post-card-meta {
      font-size: 0.85rem;
      color: var(--secondary-color);
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }
    
    .post-card-desc {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      flex-grow: 1;
    }
    
    .post-card-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    
    .confirm-delete {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .confirm-text {
      font-size: 0.9rem;
      color: var(--danger-color);
      font-weight: 600;
    }
    
    /* Post Form */
    .post-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    .form-group label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      font-size: 1rem;
      font-family: var(--font-family);
    }
    
    .form-group textarea {
      min-height: 150px; /* ~10 hàng */
      resize: vertical;
    }
    
    .error-text {
      color: var(--danger-color);
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }
    
    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    /* Post Detail Page */
    .post-detail-page {
      max-width: 900px;
      margin: 0 auto;
      background: var(--card-bg);
      padding: 2rem;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }
    
    .post-detail-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    
    .post-detail-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      font-size: 0.9rem;
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 1rem;
    }
    
    .post-detail-img {
      width: 100%;
      max-height: 450px;
      object-fit: cover;
      border-radius: var(--border-radius);
      margin-bottom: 2rem;
    }
    
    .post-detail-content {
      font-size: 1.1rem;
      line-height: 1.8;
    }
    
    .post-detail-actions {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }
    
    .confirm-delete-detail {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      background: #fef2f2; /* red-50 */
      border: 1px solid #fecaca; /* red-200 */
      border-radius: var(--border-radius);
    }
    
    .confirm-delete-detail span {
      color: var(--danger-color);
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    /* Notification */
    .notification {
      padding: 1rem 1.5rem;
      border-radius: var(--border-radius);
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    
    .notification.success {
      background-color: #dcfce7; /* green-100 */
      color: #166534; /* green-800 */
      border: 1px solid #bbf7d0; /* green-200 */
    }
    
    /* Responsive */
    @media (max-width: 1024px) {
      .post-list-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .main-content, .page-container {
        padding: 1.5rem 1rem;
      }
      .post-list-grid {
        grid-template-columns: 1fr;
      }
      .post-list-header {
        flex-direction: column;
        align-items: stretch;
      }
      .filter-input {
        min-width: auto;
        width: 100%;
      }
      .navbar-links {
        gap: 1rem;
      }
      .nav-link.btn {
        padding: 0.4rem 0.8rem;
      }
      .post-detail-title {
        font-size: 2rem;
      }
    }
  `}</style>
);
