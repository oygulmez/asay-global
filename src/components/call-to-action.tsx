"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import enMessages from '@/messages/en.json'

export default function CallToAction() {
  const messages = enMessages;
  
  // Helper function to create URLs
  const createUrl = (path: string) => path;
    return (
        <section>
            <div className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-3xl font-bold" style={{ color: 'black' }}>{(messages as any).call_to_action.title}</h2>
                        <p className="text-base max-w-3xl mx-auto" style={{ color: '#565656' }}>
                            {(messages as any).call_to_action.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Button asChild size="lg">
                                <Link href={createUrl("/contact")}>{(messages as any).call_to_action.contact_button}</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href={createUrl("/dealers")}>{(messages as any).call_to_action.dealers_button}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}