'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Wifi, Camera, Globe, Shield } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const dashboardTabs = [
  { id: 'network', label: 'Network', icon: Wifi },
  { id: 'cameras', label: 'Cameras', icon: Camera },
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'backups', label: 'Backups', icon: Shield },
]

const dashboardContent = {
  network: (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-colatech-grey-2/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-colatech-green rounded-full animate-pulse-slow" />
          <span className="text-xs text-colatech-grey-3">Status</span>
        </div>
        <p className="text-2xl font-bold">99.9%</p>
        <p className="text-xs text-colatech-grey-3">Uptime</p>
      </div>
      <div className="bg-colatech-grey-2/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Wifi className="w-4 h-4 text-colatech-green" />
          <span className="text-xs text-colatech-grey-3">Signal</span>
        </div>
        <p className="text-2xl font-bold">-42dBm</p>
        <p className="text-xs text-colatech-grey-3">Excellent</p>
      </div>
    </div>
  ),
  cameras: (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-colatech-grey-2/50 rounded-lg aspect-video relative overflow-hidden">
            <div className="absolute top-2 left-2 bg-colatech-green px-2 py-0.5 rounded text-xs font-semibold">
              LIVE
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-colatech-grey-3 text-center">12 cameras online • 0 alerts</div>
    </div>
  ),
  website: (
    <div className="space-y-4">
      <div className="bg-colatech-grey-2/50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Production</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-colatech-green rounded-full" />
            <span className="text-xs text-colatech-grey-3">Live</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-colatech-grey-3">Uptime:</span>
            <span>99.98%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-colatech-grey-3">Response:</span>
            <span>145ms</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-colatech-grey-3">Last deploy: 2h ago</div>
    </div>
  ),
  backups: (
    <div className="space-y-3">
      {['Web Server', 'File Share', 'Database'].map((item, idx) => (
        <div key={item} className="bg-colatech-grey-2/50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm">{item}</span>
            <span className="text-xs text-colatech-grey-3">{idx === 2 ? 'In progress...' : 'Completed'}</span>
          </div>
          {idx === 2 && (
            <div className="w-full bg-colatech-grey-2 rounded-full h-1.5 overflow-hidden">
              <div className="bg-colatech-green h-full w-2/3" />
            </div>
          )}
        </div>
      ))}
    </div>
  ),
}

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof dashboardContent>('network')

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-colatech-grey-1 text-colatech-grey-3 rounded-full px-3 py-1">
                Enterprise Networking Experience
              </span>
              <span className="text-xs bg-colatech-grey-1 text-colatech-grey-3 rounded-full px-3 py-1">
                Secure Installations
              </span>
              <span className="text-xs bg-colatech-grey-1 text-colatech-grey-3 rounded-full px-3 py-1">
                Houston Area
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Digital Infrastructure for Homes & Small Businesses
            </h1>

            <p className="text-xl text-colatech-grey-3 leading-relaxed">
              Websites, Wi-Fi, cameras, security, and cloud — built and managed by real network engineers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/packages">
                <Button variant="secondary" size="lg">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Dashboard Visual */}
          <div className="bg-colatech-grey-1/50 border border-colatech-grey-2 rounded-3xl p-6 backdrop-blur">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-colatech-grey-2">
              {dashboardTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as keyof typeof dashboardContent)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 text-sm transition-colors relative',
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-colatech-grey-3 hover:text-white'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-colatech-green" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Content */}
            <div className="min-h-[250px]">
              {dashboardContent[activeTab]}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
