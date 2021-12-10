<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Extend;

use Flarum\Extension\Extension;
use Flarum\Extension\ExtensionManager;
use Illuminate\Contracts\Container\Container;

class WithExtension implements ExtenderInterface
{
    protected string $extension;
    protected array $extenders;

    public function __construct(string $extension, array $extenders)
    {
        $this->extension = $extension;
        $this->extenders = $extenders;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        /** @var ExtensionManager $manager */
        $manager = $container->make(ExtensionManager::class);

        $id = Extension::nameToId($this->extension);

        if ($manager->isEnabled($id)) {
            /** @var ExtenderInterface $extender */
            foreach ($this->extenders as $extender) {
                $extender->extend($container, $extension);
            }
        }
    }
}
