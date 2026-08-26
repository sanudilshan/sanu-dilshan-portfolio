# Motion direction — Google Antigravity-inspired portfolio update

The Antigravity landing experience is associated with sparse, responsive particle fields and cursor-reactive motion. A technical reconstruction notes that its original scrolling can feel like scroll-jacking, so this portfolio will **not** imitate that behavior. Instead, it will keep native browser scrolling and add CSS `scroll-behavior: smooth` only for anchor navigation.

The adapted interaction will be a restrained, GPU-friendly field of small lime nodes in the hero. Nodes will drift away slightly from the pointer and settle back after it leaves. The effect will use `transform` and `opacity` only, will be disabled for touch/coarse pointers and for `prefers-reduced-motion`, and will not intercept pointer input. Section entrances will use one-time `IntersectionObserver` visibility changes, avoiding continuous scroll event work.

Sources consulted: https://antigravity.google/blog/introducing-google-antigravity and https://www.bram.us/2025/12/02/google-antigravity-modern-css/.
