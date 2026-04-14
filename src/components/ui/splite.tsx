'use client'

import { Suspense, lazy, useCallback, useEffect, useRef } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (app: Application) => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const appRef = useRef<Application | null>(null)

  useEffect(() => {
    return () => {
      const app = appRef.current
      if (!app) return
      appRef.current = null

      try {
        // 1. Stop the render loop so no frames are queued after cleanup
        app.stop()

        // 2. Explicitly lose the WebGL context — this is the critical step.
        //    dispose() frees Three.js GPU resources but leaves the GL context
        //    alive as an "unclean" loss. Chrome tracks those and eventually
        //    blocks new context creation ("context loss and was blocked").
        //    Calling loseContext() signals an intentional, clean release.
        const canvas = app.canvas
        const gl = canvas?.getContext('webgl2') ?? canvas?.getContext('webgl')
        gl?.getExtension('WEBGL_lose_context')?.loseContext()

        // 3. Dispose Three.js resources (textures, geometries, materials)
        app.dispose()
      } catch {
        // Ignore errors during teardown — component is already unmounting
      }
    }
  }, [])

  const handleLoad = useCallback(
    (app: Application) => {
      appRef.current = app
      app.setBackgroundColor('transparent')
      onLoad?.(app)
    },
    [onLoad],
  )

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  )
}
