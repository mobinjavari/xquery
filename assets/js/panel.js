let panelUrl = ''
const urlParams = new URLSearchParams(window.location.search)
const panelType = urlParams.get('type')
const iframe = document.getElementById('panelFrame')
const loadingScreen = document.getElementById('loadingScreen')

const initPanel = () => {
  switch (panelType) {
    case 'whm':
      panelUrl = 'https://whm.example.org'
      document.title = 'WHM Panel - xQuery'
      break
    case 'cpanel':
      panelUrl = 'https://cpanel.example.org'
      document.title = 'cPanel - xQuery'
      break
    case 'webmail':
      panelUrl = 'https://webmail.example.org'
      document.title = 'Webmail - xQuery'
      break
    default:
      window.location.href = '/'
      break
  }

  document.getElementById('urlDisplay').value = panelUrl

  const redirectTimeout = setTimeout(() => {
    alert('به دلیل عدم بارگذاری صفحه، به صورت مستقیم به پنل منتقل می‌شوید.')
    window.location.replace(panelUrl)
  }, 10000)

  iframe.onload = () => {
    clearTimeout(redirectTimeout)
    try {
      iframe.contentWindow.location.href
      loadingScreen.style.display = 'none'
    } catch (error) {
      alert('به دلیل محدودیت‌های امنیتی، به صورت مستقیم به پنل منتقل می‌شوید.')
      window.location.replace(panelUrl)
    }
  }

  iframe.onerror = () => {
    alert('خطا در بارگذاری صفحه. به صورت مستقیم به پنل منتقل می‌شوید.')
    window.location.replace(panelUrl)
  }

  iframe.src = panelUrl
}

const copyUrl = () => {
  if (window.innerWidth < 768) {
    navigator.clipboard.writeText(panelUrl)
  } else {
    const urlDisplay = document.getElementById('urlDisplay')
    urlDisplay.select()
    document.execCommand('copy')
  }

  const button = event.currentTarget
  const originalText = button.innerHTML
  button.innerHTML = `
        <svg class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    `
  setTimeout(() => {
    button.innerHTML = originalText
  }, 2000)
}

document.addEventListener('DOMContentLoaded', initPanel)

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('a[href="./panel?type=cpanel"]')
  const dialog = document.getElementById('securityDialog')
  const loadingAnimation = document.getElementById('loadingAnimation')
  const errorIcon = document.getElementById('errorIcon')
  const dialogTitle = document.getElementById('dialogTitle')
  const dialogMessage = document.getElementById('dialogMessage')
  const continueBtn = document.getElementById('continueBtn')
  const cancelBtn = document.getElementById('cancelBtn')

  let redirectTimeout

  const showDialog = () => {
    dialog.classList.remove('hidden')
    // Start redirect timer
    redirectTimeout = setTimeout(() => {
      if (!dialog.classList.contains('hidden')) {
        window.location.href = './panel?type=cpanel'
      }
    }, 3000)
  }

  const hideDialog = () => {
    dialog.classList.add('hidden')
    clearTimeout(redirectTimeout)
  }

  const showError = () => {
    loadingAnimation.classList.add('hidden')
    errorIcon.classList.remove('hidden')
    dialogTitle.textContent = 'دسترسی غیرمجاز'
    dialogMessage.textContent = 'شما مجوز دسترسی به پنل کاربری را ندارید.'
    continueBtn.classList.add('hidden')
    setTimeout(hideDialog, 2000)
  }

  loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    showDialog()
  })

  continueBtn.addEventListener('click', () => {
    window.location.href = './panel?type=cpanel'
  })

  cancelBtn.addEventListener('click', () => {
    showError()
  })
})
